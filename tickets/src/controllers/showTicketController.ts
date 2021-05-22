import { Request, Response } from 'express'
import { NotFoundError } from '@nldev/common'
import { Ticket } from '../models/Ticket'

export const showTicketController = async (req: Request, res: Response) => {
  const { id } = req.params
  const ticket = await Ticket.findById(id)
  if (!ticket) {
    throw new NotFoundError()
  }
  res.status(200).json({
    message: ticket
  })
}