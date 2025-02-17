import { Schema, Document, models, model } from 'mongoose';

export interface ISpecies extends Document {
    name: string;
    searchName: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const SpeciesSchema: Schema = new Schema<ISpecies>({
    name: { type: String, required: true, unique: true, index: true },
    searchName: { type: String, required: true, unique: true, index: true },
    order: { type: Number, required: true, unique: true, index: true },
}, {
    timestamps: true,
});

const Species = models?.Species || model<ISpecies>('Species', SpeciesSchema);

export default Species;