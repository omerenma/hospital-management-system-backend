import {Router} from 'express'
import {signin, signup, getUsers, deleteUser} from '../controller/Users'

const router = Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/users', getUsers )
router.delete('/user/:id', deleteUser)

export default router