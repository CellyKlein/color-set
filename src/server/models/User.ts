import { Schema, model } from 'mongoose';

interface IUser {
    username: string;
    password: string;
    lastlogin: Date;
    age: number;
    country: string;
}

const schema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastlogin: { type: Date }, 
    age: { type: Number },
    country: { type: String }
}, { timestamps: true });

const userModel = model<IUser>('User', schema, 'users');

export { IUser, userModel };
