import {Router} from 'express'
import { createAppointment } from '../controller/Appointment'

const router = Router()

router.post('/', createAppointment)

export default router