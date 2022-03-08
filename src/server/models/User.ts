import { Schema, model } from 'mongoose';

interface IUser {
    username: string;
    password: string;
    lastlogin: Date;
}

const schema = new Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    lastlogin: { type: Date }
}, { timestamps: true });

const userModel = model<IUser>('User', schema, 'users');

export { IUser, userModel };
