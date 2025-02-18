import React from "react";

import clsx from 'clsx'

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function LightSection({ children, id, className, ...rest }: OwnProps) {
    return <section id={id} className={clsx("bg-mainWhite w-full", className)}>
        <div className={clsx("mx-auto max-w-7xl text-black px-2 sm:px-6 lg:px-8 h-full")}>
            {children}
        </div>
    </section>
}