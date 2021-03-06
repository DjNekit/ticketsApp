import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { BadRequestError } from '@nldev/common'
import { User } from '../models/User'

export const signUpController = async (req: Request, res: Response) => {
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