import Link from 'next/link';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { fetchUser } from '@/actions/user';
import { fetchSettings } from '@/actions/settings';
import packagejson from '@/package.json';
import ToggleWithIcon from '@/components/toggles/ToggleWithIcon';
import ButtonDeleteUser from '@/components/buttons/ButtonDeleteUser';
import { current_year } from '@/lib/date_time';

export const metadata: Metadata = {
  title: {
    template: '%s | Profile',
    default: 'Profile',
  },
  description: "Set Habits. Achieve greatness.",
  metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {
  const useUser = await fetchUser();
  const useSettings = await fetchSettings() ?? [];

  const { useBodySettings, useMindSettings, useSpiritSettings } = useSettings;

  const bodySettings = useBodySettings.map((item: any) => (
    <div key={`${item?._id}`} className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium">{item?.title}</dt>
      <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(item) ?? {}} /></dd>
    </div>
  ));

  const mindSettings = useMindSettings.map((item: any) => (
    <div key={`${item?._id}`} className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium">{item?.title}</dt>
      <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(item) ?? {}} /></dd>
    </div>
  ));

  const spiritSettings = useSpiritSettings.map((item: any) => (
    <div key={`${item?._id}`} className="py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm/6 font-medium">{item?.title}</dt>
      <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0"><ToggleWithIcon data={parse(item) ?? {}} /></dd>
    </div>
  ));

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base/7 font-semibold">Profile Information</h3>
        <p className="mt-1 max-w-2xl text-sm/6">Personal details and settings.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm/6 font-medium">Update Information</dt>
            <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0"><Link className='underline' href={`/dashboard/profile/edit/${useUser._id}`}>Update</Link></dd>
          </div>

          <div className='px-4'>
            <p className="text-sm/6 font-medium">Customize what you want to use or not use in the app by using the toggles below.</p>

            <div className='px-4 py-6'>
              <h2>Body Settings</h2>
              {bodySettings}
            </div>

            <div className='px-4 py-6'>
              <h2>Mind Settings</h2>
              {mindSettings}
            </div>

            <div className='px-4 py-6'>
              <h2>Spirit Settings</h2>
              {spiritSettings}
            </div>
          </div>

          <div className="px-4 py-6 sm:px-0 border-t border-gray-100 flex flex-col">
            <dt className="text-sm/6 font-medium">Delete Profile</dt>
            <dd className="mt-1 text-sm/6 sm:col-span-2 sm:mt-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-md bg-[#7A3A30] px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-900 w-full">
                    <span>Delete</span>
                  </MenuButton>
                </div>

                <MenuItems
                  // transition
                  className="absolute right-[-136px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white text-black shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <ButtonDeleteUser />
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </dd>
          </div>

          <div className="px-4 py-6 sm:px-0 border-t border-gray-100">
            <span className="mt-8 text-center text-sm/6 md:order-1 md:mt-0">Version {packagejson.version}</span>
            <p className="mt-8 text-sm/6 md:order-1 md:mt-0 flex flex-col">
              <a href="/dashboard/privacy-policy">Privacy Policy</a>
              &copy; {current_year()} White Raven Development. All rights reserved.
            </p>
          </div>
        </dl>
      </div>
    </div>
  )
}
