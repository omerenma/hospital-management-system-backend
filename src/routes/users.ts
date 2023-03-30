import {Router} from 'express'
import {signin, signup, getUsers, deleteUser} from '../controller/Users'
import { verifyToken } from '../middlewares/verifyTokens'
const router = Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/users', verifyToken, getUsers )
router.delete('/user/:id', verifyToken, deleteUser)

export default router