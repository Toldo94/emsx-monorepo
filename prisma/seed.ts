import { PrismaClient, Prisma } from '../app/generated/prisma';

import fs from 'fs';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { z } from 'zod';

import dbConnect from '@/lib/db';
import Location from '@/models/Location';
import PlacementType from '@/models/PlacementType';

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
        try {
            await prisma.location.create({
                data: {
                    name: parsedLocation.name.trim(),
                    locationId: parsedLocation.location_id,
                    groupHq: parsedLocation.group_hq,
                    status: parsedLocation.status,
                    veterinaryGroup: {
                        connectOrCreate: {
                            where: {
                                group_id: parsedLocation.group_id,
                            },
                            create: {
                                name: parsedLocation.veterinary_group.trim(),
                                group_id: parsedLocation.group_id,
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error(error);
            break;
        }
    }


    console.log("Seeding done");
}

main()