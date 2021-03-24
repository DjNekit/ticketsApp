import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { currentUser } from '../middlewares/current-user'

const router = Router()

router.get('/api/users/currentuser', currentUser, (req: Request, res: Response) => {
    res.json({ 
        user: req.currentUser || null
    })
})

export { router as currentUserRouter }