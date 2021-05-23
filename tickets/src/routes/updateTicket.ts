import { Router } from 'express'
import { body } from 'express-validator'
import { requireAuth, validateRequest } from '@nldev/common'
import { updateTicketController } from '../controllers/updateTicketController'

const router = Router()

router.put(
  '/api/tickets/:id',

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

  updateTicketController
)

export { router as updateTicketRouter}