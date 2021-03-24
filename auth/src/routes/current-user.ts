import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const router = Router()

router.get('/api/users/currentuser', (req: Request, res: Response) => {
    if (!req.session?.jwt) {
        return res.send({ user: null })
    }

    const userToken = req.session.jwt

    try {
        const payload = jwt.verify(userToken, process.env.JWT!)
    
        res.json({
            user: payload
        })

    } catch (err) {
        return res.json({ user: null })
    }   
})

export { router as currentUserRouter }