'use client'

import { Fragment } from 'react'
import Link from 'next/link';

import { useSession, signOut } from 'next-auth/react';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react'



export default function ProfileMenu() {
    const { data: session } = useSession();

    if (session && session.authUser) {
        return <Menu as="div" className="relative ml-3">
            <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </MenuButton>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[active]:bg-gray-100"
                        >
                            Your Profile
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[active]:bg-gray-100"
                        >
                            Settings
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={async () => await signOut()}
                            className="block px-4 py-2 text-sm text-gray-700 data-[active]:bg-gray-100"
                        >
                            Sign out
                        </button>
                    </MenuItem>
                </MenuItems>
            </Transition>
        </Menu>
    }

    return <></>
}