import { z } from "zod";

export const PlacementTypeSchema = z.object({
    id: z.number(),
    name: z.string(),
    order: z.number(),
});

export const PlacementTypeResponseSchema = z.object({
    data: z.array(PlacementTypeSchema)
});

export type PlacementType = z.infer<typeof PlacementTypeSchema>;