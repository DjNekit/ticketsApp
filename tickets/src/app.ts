import express from 'express'
import helmet from 'helmet'
import cookieSession from 'cookie-session'
import { currentUser, errorHandler, NotFoundError } from '@nldev/common'
import 'express-async-errors'

import { createTicketRouter } from './routes/createTicket'

const app = express()

app.set('trust proxy', true)

// == Middlewares ============
app.use(helmet())
app.use(express.json())
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
}))
app.use(currentUser)

// == Routes =================

app.use(createTicketRouter)

app.all('/*', async () => {
    throw new NotFoundError()
})

app.use(errorHandler)

export { app }

