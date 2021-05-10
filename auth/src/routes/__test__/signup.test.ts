import request from 'supertest'
import { app } from '../../app'

it('return a 201 on successfull signup', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456'
    })
    .expect(201)
})

it('sets a cookie after successful signup', async () => {
  const res = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123456'
    })
    .expect(201)

  expect(res.get('Set-Cookie')).toBeDefined()
})

it('return a 400 with an invalid email', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: '<script>{}</script>+=@mail.com',
      password: '1234356'
    })
    .expect(400)
})

it('return a 400 with an invalid password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '123'
    })
    .expect(400)
})

it('return a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com'
    })
    .expect(400)

  await request(app)
    .post('/api/users/signup')
    .send({
      password: '123456'
    })
    .expect(400)
})

it('disallow duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '1234'
    })
    .expect(201)

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: '1234'
    })
    .expect(400)
})
