import React from 'react'
import { httpClient } from '@/lib/http-client';

async function AdminLocation({ params }: { params: { id: string } }) {
    const location = await httpClient.get(`/api/admin/locations/${params.id}`).then(res => res.data);

    return (
        <div className="p-4 border border-gray-300 rounded shadow h-full">
            <h2 className="text-xl font-bold">{location.name}</h2>
            <p>{location.veterinaryGroup}</p>
            <p>{location.locationId}</p>
        </div>
    )
}

export default AdminLocation;