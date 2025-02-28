import { Location } from "@/lib/type-definitions/location";

const getAddress = (location: Location) => {
    const addressParts = []

    if (location.address.street) {
        addressParts.push(location.address.street)
    }

    if (location.address.town) {
        addressParts.push(location.address.town)
    }
    if (location.address.county) {
        addressParts.push(location.address.county)
    }
    if (location.address.region) {
        addressParts.push(location.address.region)
    }
    if (location.address.country) {
        addressParts.push(location.address.country)
    }

    return addressParts.join(", ");
}

export default function LocationCard({ location }: { location: Location }) {
    return (
        <div className="flex flex-col items-center justify-center w-full border my-2">
            <div>{location.placementType}</div>
            <h1>{location.name}</h1>
            <p>{getAddress(location)}</p>
        </div>
    )
}