import Link from 'next/link'
import React from 'react'

interface OwnProps {
    link: string
    label: string
}

export default function NavigrationButton({ link, label }: OwnProps) {
    return (
        <div className="bg-primaryBlue text-center justify-center flex px-6 w-40 h-10 rounded-full">
            <Link className="text-black font-medium my-auto" href={link}>
                {label}
            </Link>
        </div>
    )
}
