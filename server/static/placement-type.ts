import { httpClient } from "@/lib/http-client";
import { PlacementType, PlacementTypeResponseSchema } from "@/lib/type-definitions/placement-type";

export const getPlacementTypes = async (): Promise<PlacementType[]> => {
    const placementTypesResponse = await httpClient.get('/api/static/placement-types');

    const placementTypes = PlacementTypeResponseSchema.parse(placementTypesResponse.data);

    return placementTypes.data;
}