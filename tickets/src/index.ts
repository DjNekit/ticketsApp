import { app } from './app'
import mongoose from 'mongoose'

const start = async () => {
    const PORT = 3000

    if (!process.env.JWT) {
        throw new Error('JWT env variable must be defined')
    }

    try {
        await mongoose.connect('mongodb://tickets-mongo-srv:27017/auth', {
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
