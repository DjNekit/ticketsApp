import { Router } from 'express'
import { currentUser } from '@nldev/common'
import { currentUserController } from '../controllers/currentUserController'

const router = Router()

router.get('/api/users/currentuser', currentUser, currentUserController)

export { router as currentUserRouter }