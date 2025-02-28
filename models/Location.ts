import { Schema, Document, models, model } from 'mongoose';

export interface ILocation extends Document {
    name: string;
    veterinaryGroup: string;
    groupClinic?: string;
    groupSites: number;
    groupId: string;
    placementId: number;
    locationId: string;
    groupHq: boolean;
    status: string;
    ownership: string;
    placementType: string;
    placementTypeSearch: string;
    location: {
        type: string;
        coordinates: [number, number];
    };
    address?: {
        street?: string;
        town?: string;
        county?: string;
        region?: string;
        country?: string;
        post_code?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const LocationSchema: Schema = new Schema<ILocation>({
    name: { type: String, required: true },
    veterinaryGroup: { type: String, required: true },
    groupClinic: { type: String },
    groupSites: { type: Number, required: true },
    groupId: { type: String, required: true },
    placementId: { type: Number, required: true },
    locationId: { type: String, required: true, unique: true },
    groupHq: { type: Boolean, required: true },
    status: { type: String, required: true },
    ownership: { type: String, required: true },
    placementType: { type: String, required: true },
    placementTypeSearch: { type: String, required: true },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    },
    address: {
        street: { type: String },
        town: { type: String },
        county: { type: String },
        region: { type: String },
        country: { type: String },
        post_code: { type: String },
    }
}, {
    timestamps: true,
});

LocationSchema.index({ location: '2dsphere' });

const Location = models?.Location || model<ILocation>('Location', LocationSchema);

export default Location;
