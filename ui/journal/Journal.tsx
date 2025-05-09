import { fetchEntry } from '@/actions/journal';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import Results from '@/components/showing/Results';
import Title from '@/components/text/Title';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

export default async function Journal() {

    const journalEntries = await fetchEntry() ?? [];

    const entries = (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
                {journalEntries?.entries?.length > 0 ? journalEntries?.entries.map((item: any) => (
                    <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">

                            {
                                item.title !== '' ? (
                                    <div className="flex gap-x-3 items-center">
                                        <p className="text-sm/6 font-semibold text-gray-900">{item.date}</p>
                                        <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                                            <circle r={1} cx={1} cy={1} />
                                        </svg>
                                        <p className="text-sm/6 font-semibold text-gray-900">{item.title}</p>
                                    </div>
                                ) : (
                                    <div className="flex gap-x-3 items-center">
                                        <p className="text-sm/6 font-semibold text-gray-900">{item.date}</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                            <Menu as="div" className="relative flex-none">
                                <MenuButton className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <Link
                                            href={`/dashboard/spirit/journal/details/${item._id}`}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            details<span className="sr-only">, {item.title}</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            href={`/dashboard/spirit/journal/edit/${item._id}`}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            edit<span className="sr-only">, {item.title}</span>
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                )) : <h3>Add your journal entry!</h3>}
            </ul>

        </div>
    );

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title title="Journal" />

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex gap-4 w-full justify-between">
                    <ButtonGoTo title='See all entries' path={'/dashboard/spirit/journal/all'} />
                    <ButtonGoTo title='Add entry' path={'/dashboard/spirit/journal/create'} />
                </div>
            </div>

            <div className="px-4 sm:px-2 lg:px-4">
                <Results data={journalEntries?.results} />
            </div>

            <div className='p-4 rounded'>
                {entries}
            </div>
        </div>
    )
}
