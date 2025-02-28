import fs from 'fs';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { z } from 'zod';

import dbConnect from '@/lib/db';
import Location from '@/models/Location';
import PlacementType from '@/models/PlacementType';




const LocationSchema = z.object({
    name: z.string(),
    veterinary_group: z.string(),
    group_clinic: z.string().optional(),
    group_sites: z.number(),
    group_id: z.string(),
    placement_id: z.number(),
    location_id: z.string(),
    group_hq: z.boolean(),
    status: z.string(),
    ownership: z.string(),
    placement_type: z.string(),
    location: z.object({
        latitude: z.number(),
        longitude: z.number()
    }),
    address: z.object({
        street: z.string().optional(),
        town: z.string().optional(),
        county: z.string().optional(),
        region: z.string().optional(),
        country: z.string().optional(),
        post_code: z.string().optional(),
    }).optional()
});

const avoidZero = (val: number) => val === 0 ? 0.0 : val;

function isValidLatitude(latitude: number) {
    // Check latitude: -90 to +90
    return (latitude >= -90 && latitude <= 90) ? latitude : 0;
}

function isValidLongitude(longitude: number) {
    // Check longitude: -180 to +180
    return (longitude >= -180 && longitude <= 180) ? longitude : 0;
}



async function main() {
    dotenv.config();
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const locationsData = fs.readFileSync(__dirname + '/locations.json', 'utf-8');
    const locations = JSON.parse(locationsData);

    await dbConnect();

    await Location.deleteMany({});


    for (const location of locations) {
        const parsedLocation = LocationSchema.parse(location);

        const placementType = await PlacementType.findOne({
            name: parsedLocation.placement_type.trim()
        });

        if (!placementType) {
            console.error(`Placement type not found for ${parsedLocation.placement_type}`);
            continue;
        }


        console.log("Processing: ", parsedLocation.name);

        await Location.create({
            name: parsedLocation.name.trim(),
            veterinaryGroup: parsedLocation.veterinary_group.trim(),
            groupClinic: parsedLocation.group_clinic?.trim(),
            groupSites: parsedLocation.group_sites,
            groupId: parsedLocation.group_id.trim(),
            placementId: parsedLocation.placement_id,
            locationId: parsedLocation.location_id.trim(),
            groupHq: parsedLocation.group_hq,
            status: parsedLocation.status.trim(),
            ownership: parsedLocation.ownership.trim(),
            placementType: placementType.name,
            placementTypeSearch: placementType.searchName,
            location: {
                type: "Point",
                coordinates: [isValidLongitude(parsedLocation.location.longitude), isValidLatitude(parsedLocation.location.latitude)]
            },
            address: parsedLocation.address
        });
    }
}

(async () => {
    try {
        await main();
        console.log("Seed completed");
        process.exit(0);
    } catch (e) {
        console.error(e);
        console.log("Seed failed");
        process.exit(1);
    }
})();
