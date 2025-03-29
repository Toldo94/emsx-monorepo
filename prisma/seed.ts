import { PrismaClient, Prisma } from '../app/generated/prisma';

import fs from 'fs';
import { z } from 'zod';


const prisma = new PrismaClient();

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



export async function main() {
    console.log('Seeding...');
    const locationsData = fs.readFileSync(__dirname + '/locations.json', 'utf-8');
    const locations = JSON.parse(locationsData);

    await prisma.location.deleteMany();

    for (const location of locations) {
        const parsedLocation = LocationSchema.parse(location);

        const veterinaryGroup = await prisma.veterinaryGroup.upsert({
            where: {
                group_id: parsedLocation.group_id,
            },
            update: {},
            create: {
                name: parsedLocation.veterinary_group.trim(),
                group_id: parsedLocation.group_id,
            }
        });

        console.log("Veterinary group", veterinaryGroup);

        try {
            await prisma.$executeRaw`
      INSERT INTO "Location" (name, "locationId", "groupHq", status, "veterinaryGroupId", location, "createdAt", "updatedAt")
      VALUES (
        ${parsedLocation.name.trim()},
        ${parsedLocation.location_id},
        ${parsedLocation.group_hq},
        ${parsedLocation.status},
        ${veterinaryGroup.id},
        ST_SetSRID(ST_MakePoint(${parsedLocation.location.longitude}, ${parsedLocation.location.latitude}), 4326),
        NOW(),
        NOW()
      )
      RETURNING *;
    `;
        } catch (error) {
            console.error(error);
            break;
        }
    }


    console.log("Seeding done");
}

main()