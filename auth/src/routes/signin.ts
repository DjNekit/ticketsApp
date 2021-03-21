import { Router } from 'express'

const router = Router()

router.post('/api/users/signin', (req, res) => {
    res.json({
        page: 'signin!!'
    })
})

export { router as signinRouter }