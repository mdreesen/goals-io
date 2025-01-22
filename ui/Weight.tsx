import { fetchWeight } from "@/actions/weight"
import { formatDateAndTime } from "@/lib/formatters";
import Link from "next/link";

export default async function Weight() {

  const useWeight = await fetchWeight() ?? [];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Weight</h2>
        </div>
        <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Link href={`/dashboard/weight/create`}>
            <button
              type="button"
              className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add weight
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    weight
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {useWeight.length > 0 ? useWeight.reverse().map((item: any, index: number) => (
                  <tr key={`${item.weight}-${index}`}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {`${item.weight} lbs ${item.starting_weight ? ' - Starting Weight' : ''}`}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDateAndTime(item.weight_date)}{item.starting_weight ? ' - Starting Date' : ''}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href={`/dashboard/weight/edit/${item.id}`} className="text-gray-900 hover:text-gray-900">
                        Edit<span className="sr-only">, {item.id}</span>
                      </a>
                    </td>
                  </tr>
                )) : <h3 className="py-2">No weight recorded</h3>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
