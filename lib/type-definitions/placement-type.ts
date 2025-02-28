import { z } from "zod";

export const PlacementTypeSchema = z.object({
    name: z.string(),
    searchName: z.string(),
    order: z.number(),
});

export const PlacementTypeResponseSchema = z.object({
    data: z.array(PlacementTypeSchema)
});

export type PlacementType = z.infer<typeof PlacementTypeSchema>;