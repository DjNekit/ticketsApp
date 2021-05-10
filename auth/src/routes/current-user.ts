import { Router, Request, Response } from 'express'
import { currentUser } from '@nldev/common'

const router = Router()

router.get('/api/users/currentuser', currentUser, (req: Request, res: Response) => {
  res.json({
    user: req.currentUser || null
  })
})

export { router as currentUserRouter }