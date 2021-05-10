import { Request, Response } from 'express'

export const createTicketController = async (req: Request, res: Response) => {
  res.status(200).json({ 
    test: 'test'
  })
}