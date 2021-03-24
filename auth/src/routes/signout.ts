import { Router } from 'express'

const router = Router()

router.post('/api/users/signout', (req, res) => {
    req.session = null
    res.json({
        message: 'signout success'
    })
})

export { router as signoutRouter }