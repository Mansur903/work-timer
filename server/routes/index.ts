import Router from 'express'
import userRouter from './userRouter'

const router = Router()

router.use('/home', homeRouter)
router.use('/user', userRouter)

export default router