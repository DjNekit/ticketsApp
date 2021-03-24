import { Schema, model, Model, Document } from 'mongoose'
import { PasswordManager } from '../services/passwordManager'

interface UserAttrs {
    email: string
    password: string
}

interface UserDoc extends Document {
    email: string
    password: string
}

interface UserModel extends Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc
}


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    toJSON: {
       transform: (doc, ret) => {
           const id = ret._id
           ret.id = ret._id
           delete ret._id
           delete ret.password
       },
       versionKey: false
    } 
})

userSchema.pre('save', async function(done) {
    if (this.isModified('password')) {
        const hashed = await PasswordManager.toHash(this.get('password'))
        this.set('password', hashed)
    } 

    done()
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs)
}

const User = model<UserDoc, UserModel>('User', userSchema)

export { User }

