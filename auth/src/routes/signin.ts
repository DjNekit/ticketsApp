import { Router, Request, Response } from 'express'
import { body } from 'express-validator'

import { validateRequest } from '../middlewares/validate-request'

import { User } from '../models/User'
import { PasswordManager } from '../services/passwordManager'

import { BadRequestError } from '../errors/bad-request-error'

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
    async (req: Request, res: Response) => {
        const { email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (!existingUser) {
            throw new BadRequestError('Invalide credentials')
        }

        const passwordsMatch = await PasswordManager.compare(existingUser.password, password)

        if (!passwordsMatch) {
            throw new BadRequestError('Password is not correct')
        }
        
        res.send('success')
    }
)

export { router as signinRouter }