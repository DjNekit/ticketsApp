import { Router } from 'express'
import { showTicketController } from '../controllers/showTicketController'

const router = Router()

router.get(
  '/api/tickets/:id',
  showTicketController
)

export { router as showTicketRouter }