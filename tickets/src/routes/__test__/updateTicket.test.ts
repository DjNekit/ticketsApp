import request from 'supertest'
import { app } from '../../app'

it('returns a 404 if the provider id does not exist', async () => {
  await request(app)
    .put(`/api/tickets/${global.id()}`)
    .set('Cookie', global.signin())
    .send({
      title: '123232',
      price: 1000
    })
    .expect(404)
})

it('returns a 401 if the user is not authenticated', async () => {
  await request(app)
    .put(`/api/tickets/${global.id()}`)
    .send({
      title: '123232',
      price: 1000
    })
    .expect(401)
})

it('returns a 401 if the user does not own ticket', async () => {
  const res = await global.createTicket('dfsdfsdf', 100)

  await request(app)
    .put(`/api/tickets/${res.body.message.id}`)
    .set('Cookie', global.signin())
    .send({
      title: '123232',
      price: 1000
    })
    .expect(401)
})

it('returns a 400 if the user provides an invalid title or price', async () => {
  const cookie = global.signin()

  const res = await global.createTicket('dsfsdfs', 1000, cookie)

  await request(app)
    .put(`/api/tickets/${res.body.message.id}`)
    .set('Cookie', cookie)
    .send({
      title: 'sdgsdgdfg',
      price: -10
    })
    .expect(400)

  await request(app)
    .put(`/api/tickets/${res.body.message.id}`)
    .set('Cookie', cookie)
    .send({
      title: '',
      price: 1000
    })
    .expect(400)
})

it('updates the ticket provided valid inputs', async () => {
  const cookie = global.signin()
  const title = 'sdfsdfsdf'
  const price = 2000

  const res = await global.createTicket('dsfsdfs', 1000, cookie)
  const id = res.body.message.id

  const ticketRes = await request(app)
    .put(`/api/tickets/${id}`)
    .set('Cookie', cookie)
    .send({ title, price })
    .expect(200)

  expect(ticketRes.body.message.title).toEqual(title)
  expect(ticketRes.body.message.price).toEqual(price)
})