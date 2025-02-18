import { useState } from 'react'

import clsx from 'clsx'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'


const people = [
    { id: 1, name: 'Tom Cook' },
    { id: 2, name: 'Wade Cooper' },
    { id: 3, name: 'Tanya Fox' },
    { id: 4, name: 'Arlene Mccoy' },
    { id: 5, name: 'Devon Webb' },
]

export default function PlacementTypesSelect() {
    const [selectedPeople, setSelectedPeople] = useState([])


    return (
        <div className="mx-auto w-full h-full">
            <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
                <ListboxButton
                    className={clsx(
                        'relative block w-full h-full rounded-lg bg-white/5 text-left text-sm/6 overflow-hidden',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                    )}
                >
                    <div className="truncate max-w-[17.5rem] font-normal text-sm">
                        {selectedPeople.length > 0 ? selectedPeople.map(person => person.name).join(', ') : 'What type of placement would you like?'}
                    </div>
                    <ChevronDownIcon
                        className="group pointer-events-none absolute top-[-1rem] right-0 size-8 fill-black/60"
                        aria-hidden="true"
                    />
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className={clsx(
                        'w-[var(--button-width)] rounded-xl border border-white bg-white p-1 my-6 [--anchor-gap:var(--spacing-1)] focus:outline-none shadow-[0px_8px_16px_0px_rgba(109,103,103,0.20)]',
                        'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                    )}
                >
                    {people.map((person) => (
                        <ListboxOption
                            key={person.name}
                            value={person}
                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
                        >
                            <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
                            <div className="text-sm/6">{person.name}</div>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </div>
    );
}