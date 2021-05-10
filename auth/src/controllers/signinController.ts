import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { BadRequestError } from '@nldev/common'

import { User } from '../models/User'
import { PasswordManager } from '../services/passwordManager'

export const signinController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const existingUser = await User.findOne({ email })

  if (!existingUser) {
    throw new BadRequestError('Invalide credentials')
  }

  const passwordsMatch = await PasswordManager.compare(existingUser.password, password)

  if (!passwordsMatch) {
    throw new BadRequestError('Invalide credentials')
  }

  const token = jwt.sign({
    id: existingUser.id,
    email: existingUser.email
  }, process.env.JWT!)

  req.session = {
    jwt: token
  }

  res.json({
    message: existingUser
  })
}