import {Router} from 'express'
import { createPatient } from '../controller/Patients'

const router = Router()

router.post('/', createPatient)

export default router