import { fetchBible } from '@/actions/bible';
import ButtonBack from '@/components/buttons/ButtonBack';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

export default async function Bible() {

    const bibles = await fetchBible() ?? [];
    const useSermons = bibles.sermon;

    const sermonNotes = (
        <div>
            <ul role="list" className="divide-y divide-gray-100">
                {useSermons?.length > 0 ? useSermons?.map((item: any) => (
                    <li key={item.id} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm/6 font-semibold text-gray-900">{item.book_title}</p>
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
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
                                            href={`/dashboard/spirit/bible/details/${item._id}`}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            details<span className="sr-only">, {item.name}</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link
                                            href={`/dashboard/spirit/bible/edit/${item._id}`}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Edit<span className="sr-only">, {item.name}</span>
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                )) : <h3>Add your sermon notes!</h3>}
            </ul>

        </div>
    );

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="text-3xl font-semibold text-gray-900">Bible</h2>

            <div className="flex justify-between items-center mt-4 mb-4 sm:mt-0 sm:flex-none">
                <ButtonBack path='/dashboard/spirit' />

                <Link href={'/dashboard/spirit/bible/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add notes
                    </button>
                </Link>
            </div>
            <div className='p-4 mb-6 rounded border border-green-600'>
                <h2 className="text-xl font-semibold text-gray-900">Sermon Notes</h2>

                {sermonNotes}
            </div>
        </div>
    )
}
