import {Router} from 'express'
import { createPatient } from '../controller/patients'

const router = Router()

router.post('/', createPatient)

export default router