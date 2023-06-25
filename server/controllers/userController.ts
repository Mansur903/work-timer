import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {ApiError} from '../error/ApiError'
import {User} from '../models/models'
import {NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

interface UserAuthRequest extends Request {
  body: {
    login: string,
    password: string
  }
}

const generateJWT = (id: number, login: string) => jwt.sign({id, login}, process.env.SECRET_KEY || '', {
  expiresIn: '365d'
})

export const registration = async (req: UserAuthRequest, res: Response, next: NextFunction) => {
  // const {login, password} = req.body
  // if (!login || !password) {
  //   return next(ApiError.badRequest(('Некорректный email или password')))
  // }
  //
  // //TODO: Разобраться с ошибкой в login
  // const candidate = await User.findOne({where: {login}})
  // if (candidate) {
  //   return next(ApiError.badRequest('Пользователь с таким email уже существует'))
  // }
  //
  // const hashPassword = await bcrypt.hash(password, 5)
  // const user = await User.create({login, password: hashPassword})
  // const token = generateJWT(user.id, user.login)
  //
  // return res.json({token})
}

export const login = async (req: UserAuthRequest, res: Response, next: NextFunction) => {
  // const {login, password} = req.body
  // if (!login || !password) {
  //   return next(ApiError.badRequest(('Некорректный email или password')))
  // }
  //
  // const user = await User.findOne({where: {login}})
  //
  // if (!user) {
  //   return next(ApiError.internal(('Пользователь с таким email не найден')))
  // }
  //
  // const comparePassword = bcrypt.compareSync(password, user.password)
  // if (!comparePassword) {
  //   return next(ApiError.internal(('Не верный пароль')))
  // }
  //
  // const token = generateJWT(user.id, user.login)
  //
  // const userData = {id: user.id, login: user.login}
  // return res.json({token, userData})
}