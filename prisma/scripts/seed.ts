import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { z } from 'zod';

import { PrismaClient } from '@prisma/client';

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
    ownership: z.string()
});

const prisma = new PrismaClient();


async function main() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const locationsData = fs.readFileSync(__dirname + '/locations.json', 'utf-8');
    const locations = JSON.parse(locationsData); 

    await prisma.location.deleteMany({});

    
    locations.forEach(async (location: any) => {
        const parsedLocation = LocationSchema.parse(location);
        console.log(parsedLocation);

        await prisma.location.create({
            data: {
                name: parsedLocation.name,
                veterinaryGroup: parsedLocation.veterinary_group,
                groupClinic: parsedLocation.group_clinic,
                groupSites: parsedLocation.group_sites,
                groupId: parsedLocation.group_id,
                placementId: parsedLocation.placement_id,
                locationId: parsedLocation.location_id,
                groupHq: parsedLocation.group_hq,
                status: parsedLocation.status,
                ownership: parsedLocation.ownership
            }
        });
    });
}

main()
  .then(async () => {
    await prisma.$disconnect()
    console.log("Seed completed");
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    console.log("Seed failed");
    process.exit(1)
  });
