import { Router } from 'express'
import { signUpController } from '../controllers/signupController'

const router = Router()

router.post('/api/users/signout', signUpController)

export { router as signoutRouter }