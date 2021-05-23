import request from 'supertest'
import { app } from '../../app'

it('Getting all tickets', async () => {
  const title = 'sdfsdfsdf0'
  const price = 1000

  await global.createTicket(title, price)

  const res = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200)

  expect(res.body.message[0].title).toEqual(title)
  expect(res.body.message[0].price).toEqual(price)
})