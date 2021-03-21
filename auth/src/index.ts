import express from 'express'

const app = express()

app.use(express.json())

app.get('/api/users/currentuser', (req, res) => {
    res.json({
        page: 'currentuser'
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Auth listening on port ${PORT}`)
})