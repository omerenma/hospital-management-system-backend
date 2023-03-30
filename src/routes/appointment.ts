import {Router} from 'express'
import { createAppointment } from '../controller/Appointment'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/', verifyToken, createAppointment)

export default router