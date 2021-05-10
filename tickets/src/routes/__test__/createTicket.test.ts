import request from 'supertest'
import { app } from '../../app'

it('has a route handler listening to /api/tickets for post request', async () => {
  const res = await request(app)
    .post('/api/tickets')
    .send({})

  expect(res.status).not.toEqual(404)
})

it('can only be accessed if the user is signed in', async () => {
  await request(app)
    .post('/api/tickets')
    .send({})
    .expect(401)
})

it('returns a status other than 401 if a user is signed id', async () => {
  const res = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({})
  
  expect(res.status).not.toEqual(401)
})

it('returns an error if an invalid title is provided', async () => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: '',
      price: 1000
    })
    .expect(400)
})

it('returns an error if an invalid price is provided', async () => {
  await request(app)
  .post('/api/tickets')
  .set('Cookie', global.signin())
  .send({
    title: 'test',
    price: -10
  })
  .expect(400)
  
  await request(app)
  .post('/api/tickets')
  .set('Cookie', global.signin())
  .send({
    title: 'test',
    price: ''
  })
  .expect(400)
})

it('creates a ticket with valid inputs', async () => {
  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'test',
      price: 1000
    })
    .expect(201)
})