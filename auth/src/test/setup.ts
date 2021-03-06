import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { app } from '../app'
import request from 'supertest'

declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>
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

global.signin = async () => {
  const email = 'test@test.com'
  const password = '123456'

  const res = await request(app)
    .post('/api/users/signup')
    .send({ email, password })
    .expect(201)

  const cookie = res.get('Set-Cookie')

  return cookie
}