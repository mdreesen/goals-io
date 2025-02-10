import ButtonGoTo from '@/components/buttons/ButtonGoTo'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

const data = [
    {
        id: 1,
        title: 'Weight Training',
        details: 'Trained Legs',
        distance: '',
        imageUrl:
            '/assets/icons/workout/weight_training.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 2,
        title: 'Running',
        details: 'Time: 7:30:03',
        distance: 'Distance: 1 mile',
        imageUrl:
            '/assets/icons/workout/running.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        id: 3,
        title: 'Yoga',
        details: '',
        Time: '',
        distance: '',
        imageUrl:
            '/assets/icons/workout/yoga.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
]

export default function Workout() {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-gray-900">Workout</h2>

            <div className="flex justify-between mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <ButtonGoTo title='See all workouts' path={'/dashboard/body/weight/all'} />
                <ButtonGoTo title='Add workout' path={'/dashboard/body/workout/create'} />
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                {data.map((item) => (
                    <li key={item.id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img alt="" src={item.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm/6 font-semibold text-gray-900">
                                    <a href={item.href} className="hover:underline">
                                        {item.title}
                                    </a>
                                </p>
                                <p className="mt-1 flex text-xs/5 text-gray-500">
                                    {item.details}
                                </p>
                                <p className="mt-1 flex text-xs/5 text-gray-500">
                                    {item.distance}
                                </p>
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-x-6">
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
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            View profile<span className="sr-only">, {item.title}</span>
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                                        >
                                            Message<span className="sr-only">, {item.title}</span>
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}
