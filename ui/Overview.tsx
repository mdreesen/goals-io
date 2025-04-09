import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { fetchOverview } from '@/actions/overview';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function Overview() {

    const useOverview = await fetchOverview();

    const weight = useOverview?.showWeight && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">Weight</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                    {useOverview?.weightOverview.data.length === 0 && <span className="text-sm font-medium text-white">No weight taken</span>}
                    {useOverview?.weightOverview.data.length > 0 && useOverview?.weightOverview.dataToDate?.weight}
                    {useOverview?.weightOverview.data.length > 0 && <span className="ml-2 text-sm font-medium text-white">from {useOverview?.weightOverview.startingWeight?.weight}</span>}
                </div>

                {useOverview?.weightOverview.data.length > 0 && (
                    <div
                        className={classNames(
                            useOverview?.weightOverview.weightLGType === 'decrease' ? 'bg-white text-green-800' : 'bg-red-100 text-red-800',
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
            <dt className="text-base font-normal text-white">Books</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                    {useOverview.bookOverview.booksStartedToYear}
                    <span className="ml-2 text-sm font-medium text-white">Started</span>
                </div>

                <div className="flex items-baseline text-2xl font-semibold text-white">
                    {useOverview.bookOverview.booksEndedToYear}
                    <span className="ml-2 text-sm font-medium text-white">Finished</span>
                </div>
            </dd>
        </div>
    );

    const water = useOverview?.showWater && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">Water</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className={`flex items-baseline text-2xl font-semibold ${useOverview.waterOverview?.congrats ? 'text-green-500' : 'text-white'}`}>
                    {useOverview.waterOverview.waterIntakeToday?.water_intake && `${useOverview.waterOverview.waterIntakeToday?.water_intake} oz.`}
                    <span className="ml-2 text-sm font-medium text-white">from total {useOverview.waterOverview?.total_water}</span>
                </div>
            </dd>
        </div>
    );

    return (
        <div className="bg-gray-900 py-24 sm:py-32 rounded-md">
            <div className="mx-auto max-w-7xl px-4 lg:px-4">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Overview
                        </h2>
                    </div>
                    <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-900 shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                        {weight}
                        {books}
                        {water}
                    </dl>
                </div>
            </div>
        </div>
    )
}
