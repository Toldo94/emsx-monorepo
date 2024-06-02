import React from "react";

import clsx from 'clsx'
import { ButtonProps } from "@headlessui/react";

interface OwnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function DarkSection({ children, id, className, ...rest }: OwnProps) {
    return <section id={id} className={clsx("bg-darkSlateGray w-full", className)}>
        <div className={clsx("mx-auto max-w-7xl text-white px-2 sm:px-6 lg:px-8 h-full")}>
            {children}
        </div>
    </section>
}