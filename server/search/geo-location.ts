import { httpClient } from "@/lib/http-client";

export const getGeoLocation = async (location: string) => {
    try {
        const response = await httpClient.get(`/api/search/geo-location?address=${location}`);
        return response;
    } catch (error) {
        console.error("Error fetching geo location: ", error);
        throw error;
    }
}