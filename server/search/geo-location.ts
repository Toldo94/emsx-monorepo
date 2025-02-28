import { httpClient } from "@/lib/http-client";

export const getGeoLocation = async (location: string) => {
    const response = await httpClient.get(`/api/search/geo-location?address=${location}`);
    return response;
}