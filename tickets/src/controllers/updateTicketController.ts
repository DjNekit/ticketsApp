import { Request, Response } from 'express'
import { NotAuthorizedError, NotFoundError } from '@nldev/common'
import { Ticket } from '../models/Ticket'

export const updateTicketController = async (req: Request, res: Response) => {
  const { id } = req.params
  const userId = req.currentUser!.id
  
  const ticket = await Ticket.findById(id)
  
  if (!ticket) {
    throw new NotFoundError()
  }
  
  if (ticket.userId !== userId) {
    throw new NotAuthorizedError()
  }
  
  const { title, price } = req.body

  ticket.set({ title, price })
  await ticket.save()

  res.status(200).json({ 
    message: ticket
  })
}