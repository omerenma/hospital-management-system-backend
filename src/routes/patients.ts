import {Router} from 'express'
import { createPatient, editPatient, deletPatient} from '../controller/Patients'
import { verifyToken } from '../middlewares/verifyTokens'

const router = Router()

router.post('/patient', createPatient)
router.put('/patient/:id', verifyToken ,editPatient)
router.delete('/patient/:id', verifyToken, deletPatient)

export default router