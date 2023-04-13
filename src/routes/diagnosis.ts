import {Router} from 'express'
import { createDiagnosis, getPatientDiagnosis , updeDiagnosis} from '../controller/Diagnosis';
import { verifyToken } from '../middlewares/verifyTokens';
const router = Router();

router.post('/add',  createDiagnosis)
router.get('/diagnosis', verifyToken ,getPatientDiagnosis)
router.put('/update/:id', verifyToken, updeDiagnosis)

export default router