import { Schema, model } from 'mongoose'
import { TicketAttrs, TicketDoc, TicketModel } from './types'

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
    },
    versionKey: false
  }
})

const Ticket = model<TicketDoc, TicketModel>('Ticket', schema)

schema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs)
}

export { Ticket }