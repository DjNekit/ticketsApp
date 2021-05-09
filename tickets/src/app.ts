import express from 'express'
import helmet from 'helmet'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError } from '@nldev/common'
import 'express-async-errors'

const app = express()

app.set('trust proxy', true)

// == Middlewares ============
app.use(helmet())
app.use(express.json())
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))

// == Routes =================


app.all('/*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }

