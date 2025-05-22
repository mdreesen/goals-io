import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { fetchOverview } from '@/actions/overview';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function Overview() {

    const useOverview = await fetchOverview();

    const books = useOverview?.showBooks && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">Books</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                    <AnimatedCounter number={useOverview.bookOverview.booksStartedToYear} />
                    <span className="ml-2 text-sm font-medium text-white">Started</span>
                </div>

                <div className="flex items-baseline text-2xl font-semibold text-white">
                    <AnimatedCounter number={useOverview.bookOverview.booksEndedToYear} />
                    <span className="ml-2 text-sm font-medium text-white">Finished</span>
                </div>
            </dd>
        </div>
    );

    const fasting = useOverview?.showFasting && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">Fasting</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className={`flex items-baseline text-2xl font-semibold ${useOverview?.fastingOverview?.today_complete ? 'text-green-500' : 'text-white'}`}>
                    {useOverview?.fastingOverview?.status}
                    {useOverview?.fastingOverview?.duration && <span className="ml-2 flex gap-1 text-sm font-medium text-white">duration <AnimatedCounter number={useOverview?.fastingOverview?.duration} /> hours</span>}
                </div>
            </dd>
        </div>
    );

    const water = useOverview?.showWater && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">Water</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className={`flex items-baseline text-2xl font-semibold ${useOverview.waterOverview?.congrats ? 'text-green-500' : 'text-white'}`}>
                    {useOverview.waterOverview.waterIntakeToday?.water_intake && <AnimatedCounter number={useOverview.waterOverview.waterIntakeToday?.water_intake} decimals={0} suffix={'oz.'} />}
                    <span className="ml-2 text-sm font-medium text-white">from total {useOverview.waterOverview?.total_water}</span>
                </div>
            </dd>
        </div>
    );

    const weight = useOverview?.showWeight && (
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-white">Weight</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-white">
                    {useOverview?.weightOverview.data.length === 0 && <span className="text-sm font-medium text-white">No weight taken</span>}
                    {useOverview?.weightOverview.data.length > 0 && <AnimatedCounter number={useOverview?.weightOverview.dataToDate?.weight} decimals={1} />}
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

    return (
        <div className="bg-gray-900 rounded-md">
            <div className="mx-auto max-w-7xl px-4 lg:px-4">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-900 shadow md:grid-cols-4 md:divide-x md:divide-y-0">
                        {books}
                        {fasting}
                        {water}
                        {weight}
                    </dl>
                </div>
            </div>
        </div>
    )
}
