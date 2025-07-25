import { fetchBible } from '@/actions/sections/soul/bible';
import ButtonBack from '@/components/buttons/ButtonBack';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import Results from '@/components/showing/Results';
import NoDataText from '@/components/text/NoDataText';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

export default async function Bible() {

    const bibles = await fetchBible() ?? [];
    const useSermons = bibles?.sermonAll;

    const sermonNotes = (
        <div>
           <ul role="list" className="divide-y divide-gray-100">
                {useSermons?.length > 0 ? useSermons?.map((item: any) => (
                    <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm/6 font-semibold">{item.book_title}</p>
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs/5">
                                <p className="whitespace-nowrap">
                                    {item.chapter && `Chapter ${item.chapter}`}
                                </p>
                                <svg viewBox="0 0 2 2" className="size-0.5 fill-current">
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                <p className="whitespace-nowrap">
                                    {item.verses && `Verses ${item.verses}`}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                            <Menu as="div" className="relative flex-none">
                                <MenuButton className="-m-2.5 block p-2.5 hover">
                                    <span className="sr-only">Open options</span>
                                    <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                                </MenuButton>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white text-black py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <Link
                                            href={`/dashboard/spirit/bible/details/${item._id}`}
                                            className="block px-3 py-1 text-sm/6 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            details<span className="sr-only">, {item.name}</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            href={`/dashboard/spirit/bible/edit/${item._id}`}
                                            className="block px-3 py-1 text-sm/6 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            edit<span className="sr-only">, {item.name}</span>
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                )) : <NoDataText text="Add your sermon notes!" />}
            </ul>

        </div>
    );

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Bible</h2>

            <div className="flex justify-between items-center mt-4 mb-4 sm:mt-0 sm:flex-none">
                <ButtonBack path='/dashboard/spirit' />
                <ButtonGoTo title="Add notes" path="/dashboard/spirit/bible/create" />

            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-xl font-semibold">Sermon Notes</h2>
                <Results data={useSermons?.length.toString()} />

                {sermonNotes}
            </div>
        </div>
    )
}
