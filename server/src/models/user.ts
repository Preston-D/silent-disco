import mongoose, { InferSchemaType } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
  });
interface IUser extends InferSchemaType<typeof userSchema> {
    _id: string,
    delete: Function,
    save: Function
}
type User = IUser

const User = mongoose.model('User', userSchema)

export default User
