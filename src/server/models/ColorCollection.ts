import { Schema, model } from 'mongoose';
import { IColor } from './Color';

interface IColorCollection {
    title: string;
    description: string;
    content: Array<IColor>;
}

const schema = new Schema<IColorCollection>({
    title: { type: String, required: true },
    description: { type: String },
    content: [ { type: Schema.Types.ObjectId, ref: 'Color' } ]
}, { timestamps: true });

const colorCollectionModel = model<IColorCollection>('ColorCollection', schema, 'colorCollections');

export { IColorCollection, colorCollectionModel };
