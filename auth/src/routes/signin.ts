import { Router } from 'express'
import { body } from 'express-validator'
import { signinController } from '../controllers/signinController'
import { validateRequest } from '@nldev/common'

const router = Router()

router.post(
  '/api/users/signin',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valide'),
    body('password')
      .trim()
      .notEmpty()
  ],
  validateRequest,
  signinController
)

export { router as signinRouter }