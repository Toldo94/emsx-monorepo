import { Schema, Document, models, model } from 'mongoose';

export interface IPlacementType extends Document {
    name: string;
    searchName: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const PlacementTypeSchema: Schema = new Schema<IPlacementType>({
    name: { type: String, required: true, unique: true, index: true },
    searchName: { type: String, required: true, unique: true, index: true },
    order: { type: Number, required: true, unique: true, index: true },
}, {
    timestamps: true,
});

const PlacementType = models?.PlacementType || model<IPlacementType>('PlacementType', PlacementTypeSchema);

export default PlacementType;