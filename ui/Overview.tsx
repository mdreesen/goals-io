import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { fetchOverview } from '@/actions/overview';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function Overview() {

    const useOverview = await fetchOverview();

    const weight = useOverview?.showWeight && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">Weight</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-900">
                    {useOverview?.weightOverview.data.length === 0 && <span className="text-sm font-medium text-gray-500">No weight taken</span>}
                    {useOverview?.weightOverview.data.length > 0 && useOverview?.weightOverview.dataToDate?.weight}
                    {useOverview?.weightOverview.data.length > 0 && <span className="ml-2 text-sm font-medium text-gray-500">from {useOverview?.weightOverview.startingWeight?.weight}</span>}
                </div>

                {useOverview?.weightOverview.data.length > 0 && (
                    <div
                        className={classNames(
                            useOverview?.weightOverview.weightLGType === 'decrease' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                            'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0',
                        )}
                    >
                        {useOverview?.weightOverview.weightLGType === 'decrease' ? (
                            <ArrowDownIcon aria-hidden="true" className="-ml-1 mr-0.5 size-5 shrink-0 self-center text-green-500" />
                        ) : (
                            <ArrowUpIcon aria-hidden="true" className="-ml-1 mr-0.5 size-5 shrink-0 self-center text-red-500" />
                        )}

                        <span className="sr-only"> {useOverview?.weightOverview.weightLGType === 'decrease' ? 'Decreased' : 'Increased'} by </span>
                        {useOverview?.weightOverview.lossOrGain}
                    </div>
                )}
            </dd>
        </div>
    );

    const books = useOverview?.showBooks && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">Books</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-900">
                    {useOverview.bookOverview.booksStartedToYear}
                    <span className="ml-2 text-sm font-medium text-gray-500">Started</span>
                </div>

                <div className="flex items-baseline text-2xl font-semibold text-indigo-900">
                    {useOverview.bookOverview.booksEndedToYear}
                    <span className="ml-2 text-sm font-medium text-gray-500">Finished</span>
                </div>
            </dd>
        </div>
    );

    const water = useOverview?.showWater && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">Water</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className={`flex items-baseline text-2xl font-semibold ${useOverview.waterOverview?.congrats ? 'text-green-500' : 'text-indigo-900'}`}>
                    {useOverview.waterOverview.waterIntakeToday?.water_intake && `${useOverview.waterOverview.waterIntakeToday?.water_intake} oz.`}
                    <span className="ml-2 text-sm font-medium text-gray-500">from total {useOverview.waterOverview?.total_water}</span>
                </div>
            </dd>
        </div>
    );

    return (
        <div>
            {/* <h3 className="text-base font-semibold text-gray-900">Overview</h3> */}
            <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                {weight}
                {books}
                {water}
            </dl>
        </div>
    )
}
