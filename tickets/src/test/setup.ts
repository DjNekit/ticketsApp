import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { app } from '../app'
import request from 'supertest'

declare global {
    namespace NodeJS {
        interface Global {
            signin(): string[]
        }
    }
}

let mongo: any
beforeAll(async() => {
    process.env.JWT = 'secret'

    mongo = new MongoMemoryServer()
    const uri = await mongo.getUri()

    await mongoose.connect(uri, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongo.getInstanceInfo()
})

beforeEach(async () => {
    const collections = await mongoose.connection.db.collections()

    for (let collection of collections) {
        await collection.deleteMany({})
    }
})

afterAll(async () => {
    await mongo.stop()
    await mongoose.connection.close()
})

// Create fake auth function for test environment
global.signin = () => {
    const payload = {
        id: '123mnk123n',
        email: 'test@test.ru'
    }
    const token = jwt.sign(payload, process.env.JWT!)

    const session = { jwt: token }
    const sessionJSON = JSON.stringify(session)
    const base64 = Buffer.from(sessionJSON).toString('base64')

    return [`express:sess=${base64}`]
}