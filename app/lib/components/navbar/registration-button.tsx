import React from 'react'
import Link from 'next/link'

export default function RegistraionButton() {
    return (
        <div className="flex mx-6 w-24 h-10">
            <Link className="text-white font-medium my-auto" href="/registration">
                Register
            </Link>
        </div>
    )
}
