import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { fetchUser } from '@/actions/user';
import { fetchSettings } from '@/actions/settings';
import ButtonAuth from "@/components/buttons/ButtonAuth";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function Navigation() {

    const useUser = await fetchUser();
    const useSettings = await fetchSettings();

    const { useShowBody, useShowMind, useShowSpirit } = useSettings;

    const user = {
        name: useUser?.username ? useUser?.username : useUser?.email,
    };

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: false, useNav: true },
        { name: 'Body', href: '/dashboard/body', current: false, useNav: useShowBody },
        { name: 'Mind', href: '/dashboard/mind', current: false, useNav: useShowMind },
        { name: 'Spirit', href: '/dashboard/spirit', current: false, useNav: useShowSpirit },
    ]
    const userNavigation = [
        { name: 'Your Profile', href: '/dashboard/profile' },
        { component_name: 'Sign out', component: <ButtonAuth /> },
    ]

    return (
        <Disclosure as="nav" className="bg-gray-900 hidden md:block lg:block">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div>
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <Link href={'/dashboard'}>
                                    <Image
                                        alt="White Raven Logo"
                                        width={100}
                                        height={100}
                                        src={'/assets/logo_transparent_512x512.png'}
                                        className="h-[8rem] w-16 rounded-full object-cover scale-75"
                                    />
                                </Link>
                            </div>
                            {navigation.map((item) => item?.useNav && (
                                <div
                                    key={item.name}
                                    className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            href={item.href}
                                            aria-current={item.name ? 'page' : undefined}
                                            className={classNames(
                                                'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {/* <button
                                    type="button"
                                    className="relative rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon aria-hidden="true" className="size-6" />
                                </button> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <Cog6ToothIcon aria-hidden="true" className="size-6 text-gray-500 " />
                                        </MenuButton>
                                    </div>
                                    <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                    >
                                        {userNavigation.map((item) => (
                                            <div key={item.component_name ?? item.name}>
                                                <MenuItem>
                                                    <a
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </MenuItem>
                                                {item.component}
                                            </div>

                                        ))}
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="border-b border-gray-700 md:hidden">
                <div className="space-y-1 px-2 py-3 sm:px-3">
                    {navigation.map((item) => item?.useNav && (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.name ? 'page' : undefined}
                            className={classNames(
                                'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                    {/* <div className="flex items-center px-5">
                        <div className="ml-3">
                            <div className="text-base/5 font-medium text-white">{user.name}</div>
                        </div>
                        <button
                            type="button"
                            className="relative ml-auto shrink-0 rounded-full bg-gray-900 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div> */}
                    <div className="mt-3 space-y-1 px-2">
                        {userNavigation.map((item) => (
                            <div key={item.component_name ?? item.name}>
                                <DisclosureButton
                                    as="a"
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                                {item.component}

                            </div>
                        ))}
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}