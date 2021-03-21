import { Router } from 'express'

const router = Router()

router.post('/api/users/signout', (req, res) => {
    res.json({
        page: 'signout!!'
    })
})

export { router as signoutRouter }