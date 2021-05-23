import express from 'express'
import helmet from 'helmet'
import cookieSession from 'cookie-session'
import { errorHandler, NotFoundError } from '@nldev/common'
import 'express-async-errors'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { signoutRouter } from './routes/signout'

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
app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)

app.all('/*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }

