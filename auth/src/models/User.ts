import { Schema, model } from 'mongoose'
import { PasswordManager } from '../services/passwordManager'
import { UserAttrs, UserDoc, UserModel } from './types'

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
           ret.id = ret._id
           delete ret.password
           delete ret._id
           delete ret.__v
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


