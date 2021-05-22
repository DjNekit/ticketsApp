import { Router } from 'express'
import { getTicketsController } from '../controllers/getTicketsController'

const router = Router()

router.get('/api/tickets', getTicketsController)

export { router as getTicketsRouter }