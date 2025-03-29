import { FILTERS_QUERY_PARAM } from "@/app/lib/util/filters";
import { Filters } from "@/enums/filters";
import { httpClient } from "@/lib/http-client";

export const getLocations = async (latitude: number, longitude: number, filters: number[]) => {
    const queryParams = new URLSearchParams();
    queryParams.set(Filters.LATITUDE, latitude.toString());
    queryParams.set(Filters.LONGITUDE, longitude.toString());
    queryParams.set(FILTERS_QUERY_PARAM, filters.join(','));
    
    const queryString = queryParams.toString();
    
    const response = await httpClient.get(`/api/search/locations?${queryString}`);
    return response.data;
}   