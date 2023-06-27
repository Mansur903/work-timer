import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {ApiError} from '../error/ApiError'
import {User} from '../models/models'
import {NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

interface UserAuthRequest extends Request {
  body: {
    email: string,
    password: string
  }
}

const generateJWT = (id: number, login: string) => jwt.sign({id, login}, process.env.SECRET_KEY || '', {
  expiresIn: '24h'
})

export const registration = async (req: UserAuthRequest, res: Response, next: NextFunction) => {
  const {email, password} = req.body
  if (!email || !password) {
    return next(ApiError.badRequest(('Некорректный email или password')))
  }

  const candidate = await User.findOne({where: {email}})
  if (candidate) {
    return next(ApiError.badRequest('Пользователь с таким email уже существует'))
  }

  const hashPassword = await bcrypt.hash(password, 5)
  const user = await User.create({email, password: hashPassword})
  const token = generateJWT(user.id, user.email)

  return res.json({token})
}

export const login = async (req: UserAuthRequest, res: Response, next: NextFunction) => {
  const {email, password} = req.body
  if (!email || !password) {
    return next(ApiError.badRequest(('Некорректный email или password')))
  }

  const user = await User.findOne({where: {email}})

  if (!user) {
    return next(ApiError.internal(('Пользователь с таким email не найден')))
  }

  const comparePassword = bcrypt.compareSync(password, user.password)
  if (!comparePassword) {
    return next(ApiError.internal(('Не верный пароль')))
  }

  const token = generateJWT(user.id, user.email)

  const userData = {id: user.id, login: user.email}
  return res.json({token, userData})
}