import { Request, Response } from 'express'
import { Ticket } from '../models/Ticket'

export const createTicketController = async (req: Request, res: Response) => {
  const { title, price, userId } = req.body

  const ticket = Ticket.build({ title, price, userId })
  await ticket.save()

  res.status(201).json({ 
    message: ticket
  })
}