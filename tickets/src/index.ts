import { app } from './app'
import mongoose from 'mongoose'

const start = async () => {
    const PORT = 3000

    if (!process.env.JWT) {
        throw new Error('JWT env variable must be defined')
    }
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI env variable must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Connecting to MongoDB')
        app.listen(PORT, () => {
            console.log(`Tickets service listening on port ${PORT}`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()
