import { Router } from 'express'
import { body } from 'express-validator'
import { validateRequest } from '@nldev/common'
import { signUpController } from '../controllers/signupController'

const router = Router()

router.post(
  '/api/users/signup',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valide'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters')
  ],
  validateRequest,
  signUpController
)

export { router as signupRouter }