import express from 'express'
import mongoose from 'mongoose'
import 'express-async-errors'

// == Middlewares ============
import { errorHandler } from './middlewares/error-handler'

// == Routes =================
import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { signoutRouter } from './routes/signout'

import { NotFoundError } from './errors/not-found-error'

const PORT = 3000

const app = express()
app.use(express.json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)

app.all('/*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Connecting to MongoDB')
        app.listen(PORT, () => {
            console.log(`Auth listening on port ${PORT}`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
