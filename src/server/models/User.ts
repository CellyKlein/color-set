import { Schema, model } from 'mongoose';

interface IUser {
    username: string;
    password: string;
    lastlogin: Date;
    age: Number;
}

const schema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastlogin: { type: Date }, 
    age: { type: Number }
}, { timestamps: true });

const userModel = model<IUser>('User', schema, 'users');

export { IUser, userModel };
