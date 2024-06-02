import Link from 'next/link'
import React from 'react'

interface OwnProps {
    label: string
    type: "submit" | "reset" | "button" | undefined;
}

export default function ActionButton({ label, type }: OwnProps) {
    return (
        <button
            type={type}
            className="bg-primaryBlue text-center items-center flex px-6 w-24 h-10 rounded-full"
        >
            {label}
        </button>
    )
}
