import { Router } from 'express'

const router = Router()

router.get('/api/users/currentuser', (req, res) => {
    res.json({
        page: 'currentuser!!'
    })
})

export { router as currentUserRouter }