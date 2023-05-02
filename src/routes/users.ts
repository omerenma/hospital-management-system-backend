import {Router} from 'express'
import {signin, signup, getUsers, deleteUser, getDoctors} from '../controller/Users'
import { verifyToken } from '../middlewares/verifyTokens'
const router = Router()

router.post('/register', signup)
router.post('/signin', signin)
router.get('/getusers', verifyToken, getUsers )
router.get('/getdoctors', getDoctors)
router.delete('/user/:id', deleteUser)


export default router