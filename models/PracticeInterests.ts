import { Schema, Document, models, model } from 'mongoose';

export interface IPracticeInterests extends Document {
    name: string;
    searchName: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const PracticeInterestsSchema: Schema = new Schema<IPracticeInterests>({
    name: { type: String, required: true, unique: true, index: true },
    searchName: { type: String, required: true, unique: true, index: true },
    order: { type: Number, required: true, unique: true, index: true },
}, {
    timestamps: true,
});

const PracticeInterests = models?.PracticeInterests || model<IPracticeInterests>('PracticeInterests', PracticeInterestsSchema);

export default PracticeInterests;