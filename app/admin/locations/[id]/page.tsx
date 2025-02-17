'use client'


import React, { useEffect, useState } from 'react'
import { httpClient } from '@/lib/http-client';

function AdminLocation({ params }: { params: { id: string } }) {

    const [location, setLocation] = useState<any>(null);

    const fetchLocation = async () => {
        const { id } = await params;
        const res = await httpClient.get(`/api/admin/locations/${id}`);
        setLocation(res.data);
    }

    useEffect(() => {
        fetchLocation();
    }, []);

    if (!location) return <div>Loading...</div>;

    return (
        <div className="p-4 border border-gray-300 rounded shadow h-full">
            <h2 className="text-xl font-bold">{location.name}</h2>
            <p>{location.veterinaryGroup}</p>
            <p>{location.locationId}</p>
        </div>
    )
}

export default AdminLocation;