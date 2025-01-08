import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { fetchGoals } from '@/actions/goals';
import { statusColors } from '@/lib/statusColors';
import ButtonDeleteGoal from "@/components/buttons/ButtonDeleteGoal";
import Link from 'next/link';

export default async function Page() {
    const useGoals = await fetchGoals();

    return (
        <div>
            <h2 className="text-3xl font-semibold text-gray-900">Goals</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/goals/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add goal
                    </button>
                </Link>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                {useGoals.length > 0 ? useGoals.map((item: any, index: number) => (
                    <li key={`${item._id}-${index}`} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="min-w-0">
                            <div className="flex items-start gap-x-3">
                                <p className="text-sm/6 font-semibold text-gray-900">{item.title}</p>
                                <p className={`mt-0.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusColors(item)}`}>
                                    {item.status}
                                </p>
                            </div>
                            <div className="mt-1 flex items-center gap-x-2 text-xs/5 text-gray-500">
                                <p className="whitespace-nowrap">
                                    {item.kind && `${item.kind} goal`}
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
                                            href={`/dashboard/goals/edit/${JSON.parse(JSON.stringify(item._id))}`}
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Edit<span className="sr-only">, {item.name}</span>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <ButtonDeleteGoal data={JSON.parse(JSON.stringify(item._id))} />
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                )) : <h3>Add your first goal!</h3>}
            </ul>
        </div>
    )
}
