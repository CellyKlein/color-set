import { Schema, model } from 'mongoose';

interface IRGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}
interface IColor {
    hex: string;
    rgba: Array<IRGBA>;
}

const schema = new Schema<IColor>({
    hex: { type: String, required: true },
    rgba: [ 
        {
            r: { type: Number },
            g: { type: Number },
            b: { type: Number },
            a: { type: Number }
        }  
    ]
}, { timestamps: true });

const colorModel = model<IColor>('Color', schema, 'colors');

export { IColor, colorModel };
