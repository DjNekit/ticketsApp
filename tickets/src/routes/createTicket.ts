import { Router } from 'express'
import { body } from 'express-validator'
import { requireAuth, validateRequest } from '@nldev/common'
import { createTicketController } from '../controllers/createTicket'

const router = Router()

router.post(
  '/api/tickets',

  requireAuth,

  [
    body('title')
      .notEmpty()
      .withMessage('Title must be valid'),
    
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price must be valid')
  ],
  validateRequest, 

  createTicketController
)

export { router as createticketRouter}