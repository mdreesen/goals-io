import { fetchBible } from '@/actions/bible';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

export default async function Page() {

  const bibles = await fetchBible() ?? [];

  return (
    <div>
      <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
        <Link href={'/dashboard/bible/create'}>
          <button
            type="button"
            className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
          >
            Add bible notes
          </button>
        </Link>
      </div>

      <ul role="list" className="divide-y divide-gray-100">
        {bibles.length > 0 ? bibles.map((item: any) => (
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
              <Link
                href={`/dashboard/bible/details/${item._id}`}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                Details<span className="sr-only">, {item.book_title}</span>
              </Link>
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
                      href={`/dashboard/bible/edit/${item._id}`}
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Edit<span className="sr-only">, {item.name}</span>
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </li>
        )) : <h3>Add your bible notes!</h3>}
      </ul>

    </div>
  )
}
