import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { Response } from 'express'
import jwt from 'jsonwebtoken'
import request from 'supertest'
import { app } from '../app'

declare global {
  namespace NodeJS {
    interface Global {
      signin(): string[]
      id(): string
      createTicket(title: string, price: number, cookie?: string[]): Promise<any> 
    }
  }
}

let mongo: any
beforeAll(async () => {
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

global.id = () => {
  return mongoose.Types.ObjectId().toHexString()
}

// Create fake auth function for test environment
global.signin = () => {
  const payload = {
    id: global.id(),
    email: 'test@test.ru'
  }
  const token = jwt.sign(payload, process.env.JWT!)

  const session = { jwt: token }
  const sessionJSON = JSON.stringify(session)
  const base64 = Buffer.from(sessionJSON).toString('base64')

  return [`express:sess=${base64}`]
}

global.createTicket = async (title, price, cookie) => {
  const res = await request(app)
    .post('/api/tickets')
    .set('Cookie', cookie || global.signin())
    .send({ title, price })

  return res
}