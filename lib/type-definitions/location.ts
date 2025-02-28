import { z } from "zod";

export const LocationSchema = z.object({
    id: z.string(),
    name: z.string(),
    distance: z.number(),
    placementTypeSearch: z.string(),
    placementType: z.string(),
    groupId: z.string(),
    groupClinic: z.string(),
    groupSites: z.number(),
    address: z.object({
        street: z.string(),
        town: z.string(),
        county: z.string(),
        region: z.string(),
        country: z.string(),
        post_code: z.string(),
    }),
});

export const LocationResponseSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
    data: z.array(LocationSchema)
});

export type Location = z.infer<typeof LocationSchema>;
