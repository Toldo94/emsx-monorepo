import React from "react";

interface OwnProps {
    children: React.ReactNode
    id?: string
}

export default function DarkSection({children, id}: OwnProps) {
    return <section id={id} className="bg-darkSlateGray w-full">
        <div className="mx-auto max-w-7xl text-white px-2 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
}