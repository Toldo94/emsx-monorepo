import { z } from "zod";

const GeometrySchema = z.object({
  location: z.object({
    lat: z.number(),
    lng: z.number()
  }),
});

export const GeoLocationGoogleApiSchema = z.object({
  formatted_address: z.string(),
  geometry: GeometrySchema,
});

export const GeoLocationSchema = z.object({
    formatted_address: z.string(),
    latitude: z.number(),
    longitude: z.number(),
});

export type GeoLocationGoogleApi = z.infer<typeof GeoLocationGoogleApiSchema>;
export type GeoLocation = z.infer<typeof GeoLocationSchema>;