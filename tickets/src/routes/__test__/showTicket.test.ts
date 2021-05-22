import request from 'supertest'
import { app } from '../../app'

describe('Tickets manipulation', () => {
  it('returns a 404 if the ticket is not found', async () => {

    await request(app)
      .get(`/api/tickets/${global.id()}`)
      .send()
      .expect(404)
  })
  
  it('returns a ticket if it is found', async () => {
    const title = 'sdfsdfsdf'
    const price = 1000
  
    const createTicketRes = await request(app)
      .post('/api/tickets')
      .set('Cookie', global.signin())
      .send({ title, price})
      .expect(201)
  
    const id = createTicketRes.body.message.id
  
    const ticketRes = await request(app)
      .get(`/api/tickets/${id}`)
      .send()
      .expect(200)
  
    expect(ticketRes.body.message.title).toEqual(title)
    expect(ticketRes.body.message.price).toEqual(price)
  })
})
