import express from 'express'

// == Middlewares ============
import { errorHandler } from './middlewares/error-handler'

// == Routes =================
import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { signoutRouter } from './routes/signout'

const app = express()
app.use(express.json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)

app.use(errorHandler)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Auth listening on port ${PORT}`)
})