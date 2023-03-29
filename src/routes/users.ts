import {Router} from 'express'
import {signin, signup} from '../controller/users'

const router = Router()

router.post('/', signup)

export default router