import {Router} from 'express'
import { createAppointment } from '../controller/appointment'

const router = Router()

router.post('/', createAppointment)

export default router