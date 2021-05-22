import request from 'supertest'
import { app } from '../../app'
import { Ticket } from '../../models/Ticket'

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
  let tickets = await Ticket.find({})
  expect(tickets.length).toEqual(0)

  const title = 'test'
  const price = 1000
  const userId = '123mnk123n'

  await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title,
      price,
      userId
    })
    .expect(201)

    tickets = await Ticket.find({})
    expect(tickets.length).toEqual(1)
    expect(tickets[0].title).toEqual(title)
    expect(tickets[0].price).toEqual(price)
})