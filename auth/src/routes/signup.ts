import { Router, Request, Response } from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'

import { validateRequest } from '@nldev/common'

import { BadRequestError } from '@nldev/common'

import { User } from '../models/User'

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
    async (req: Request, res: Response) => {
        const { email, password } = req.body

        const existingUser = await User.findOne({ email })

        if (existingUser) {
            throw new BadRequestError('Email in use!')            
        }

        const user = User.build({ email, password })
        await user.save()

        // Generate JWT token
        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, process.env.JWT!)

        // Store it on session object
        req.session = {
            jwt: token
        }

        res.status(201).json({
            message: user
        })
    }
)

export { router as signupRouter }