import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { statusColors } from '@/lib/colors';
import { parse } from '@/lib/formatters';
import ButtonDeleteHabit from "@/components/buttons/ButtonDeleteHabit";
import Link from 'next/link';

export default async function HabitList({ data }: any) {

    return data.length > 0 ? data?.map((item: any, index: number) => (
        <li key={`${item._id}-${index}`} className="flex items-center justify-between gap-x-6 p-5">
            <div className="min-w-0">
                <div className="flex items-start gap-x-3">
                    <p className="text-sm/6 font-semibold">{item.title}</p>
                    <p className={`mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusColors(item)}`}>
                        {item.status}
                    </p>
                </div>
                <div className="mt-1 flex items-center gap-x-2 text-xs/5">
                    <p className="whitespace-nowrap">
                        {item.kind && `${item.kind} habit`}
                    </p>
                </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
                <Menu as="div" className="relative flex-none">
                    <MenuButton className="-m-2.5 block p-2.5">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                    </MenuButton>
                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white text-black py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                        <MenuItem>
                            <Link
                                href={`/dashboard/mind/habits/edit/${parse(item._id)}`}
                                className="block px-3 py-1 text-sm/6 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                            >
                                Edit<span className="sr-only">, {item.name}</span>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <ButtonDeleteHabit data={parse(item._id)} />
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </li>
    )) : <h3>Make your first habit!</h3>
}
