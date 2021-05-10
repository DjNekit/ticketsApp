import { Schema, model, Document, Model } from 'mongoose'

interface TicketAttrs {
  title: string
  price: number
}

interface TicketDoc extends Document {
  title: string
  price: number
}

interface TicketModel extends Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc
}

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id
      delete ret._id
      delete ret.iat
    },
    versionKey: false
  }
})

const Ticket = model<TicketDoc, TicketModel>('Ticket', schema)

schema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs)
}

export { Ticket }