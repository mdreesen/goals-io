import { fetchWeight } from "@/actions/weight"
import { formatDateAndTime } from "@/lib/formatters";
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";

export default async function Weight() {

  const useWeight = await fetchWeight() ?? [];

  return (
    <div className="px-4 sm:px-2 lg:px-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-3xl font-semibold text-gray-900">Weight</h2>
          <div>
            {useWeight.startingWeight && (
              <span className="py-2 text-left text-sm font-bold text-gray-900 sm:pl-0">
                Notables
              </span>
            )}
            {useWeight.startingWeight && (
              <p className="py-1 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                {`Starting weight ${useWeight.startingWeight.weight} lbs`}
              </p>
            )}
            {useWeight.highestWeight !== '0' && (
              <p className="py-1 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                {`Highest weight ${useWeight.highestWeight} lbs`}
              </p>
            )}
            {useWeight.averageWeight !== '0' && (
              <p className="py-1 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                {`Average weight ${useWeight.averageWeight} lbs`}
              </p>
            )}
            {useWeight.lossOrGain !== 'Lost 0 lbs' && (
              <p className="py-1 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                {`${useWeight.lossOrGain}`}
              </p>
            )}

          </div>
        </div>
        <div className="flex justify-end mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div className="flex gap-4 w-full justify-between">
            <ButtonGoTo title='See all weight' path={'/dashboard/body/weight/all'} />
            <ButtonGoTo title='Add weight' path={'/dashboard/body/weight/create'} />
          </div>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

            <div className="px-4 sm:px-2 lg:px-4">
              <Results data={useWeight.totalWeight} />
            </div>

            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Weight
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {useWeight?.limited?.length > 0 ? useWeight.limited.map((item: any, index: number) => (
                  <tr key={`${item.weight}-${index}`}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {`${item.weight} lbs ${item.starting_weight ? ' - Starting Weight' : ''}`}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDateAndTime(item.weight_date)}{item.starting_weight ? ' - Starting Date' : ''}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href={`/dashboard/body/weight/edit/${item.id}`} className="text-gray-900 hover:text-gray-900">
                        edit<span className="sr-only">, {item.id}</span>
                      </a>
                    </td>
                  </tr>
                )) : <tr className="py-2">No weight recorded</tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
