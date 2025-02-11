import Link from 'next/link'
import React from 'react'

function sidebar() {
  return (
    <div className="h-full bg-gray-800 text-white">
        <ul className="space-y-4 p-4">
            <li className="hover:bg-gray-700 p-2 rounded">
                <Link href="/admin/locations">Locations</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
                <Link href="/admin/users">Users</Link>
            </li>
            <li className="hover:bg-gray-700 p-2 rounded">
                <Link href="/admin/settings">Settings</Link>
            </li>
        </ul>
    </div>
  )
}

export default sidebar