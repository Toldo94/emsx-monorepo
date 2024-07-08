'use client'

import { useState } from "react";

import ActionButton from "../lib/ui/action-button";
import DarkSection from "../lib/ui/dark-section";
import { signIn } from "next-auth/react";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn("credentials", {
            email: email,
            password: password
        })
    };

    return (
        <main className="h-dvh">
            <DarkSection id="login-screen" className="h-full">
                <div className="h-full flex">
                    <div className="bg-white text-black max-w-xl mx-auto my-auto w-1/2 p-8">
                        <div className="">
                            <h1 className="font-black">
                                Login
                            </h1>
                            <p className="pt-4 pb-8">
                                Welcome back to EMSX. Sign in below to enter your account.
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-12">
                                    <div className="">
                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                            <div className="sm:col-span-12">
                                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Email
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        autoComplete="email"
                                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-12">
                                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Password
                                                </label>
                                                <div className="mt-2">
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        autoComplete="password"
                                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <ActionButton type="submit" label="Log in" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </DarkSection>
        </main>
    );
}
