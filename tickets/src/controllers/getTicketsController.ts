import { Request, Response } from 'express'
import { Ticket } from '../models/Ticket'

export const getTicketsController = async (req: Request, res: Response) => {
  const tickets = await Ticket.find({})

  res.status(200).json({
    message: tickets
  })
}