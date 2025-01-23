import { filterAffirmations } from '@/actions/affirmations';
import Link from 'next/link';
import AffirmationsList from '@/components/lists/AffirmationsList';

export default async function Affirmations() {
    const filteredAffirmations = await filterAffirmations() as any;

    // Filtered Goals
    const growth = filteredAffirmations?.growth_affirmations;
    const mindfulness = filteredAffirmations?.mindfulness_affirmations;
    const positivity = filteredAffirmations?.positivity_affirmations;
    const self_worth = filteredAffirmations?.selfWorth_affirmations;

    // Render goals sections
    const renderGrowth = filteredAffirmations.use_growth_affirmations;
    const renderMindfulness = filteredAffirmations.use_mindfulness_affirmations;
    const renderPositivity = filteredAffirmations.use_positivity_affirmations;
    const renderSelfWorth = filteredAffirmations.use_selfWorth_affirmations;

    const none = renderGrowth === false && renderMindfulness === false && renderPositivity === false && renderSelfWorth === false;

    const useGrowth = renderGrowth && (
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                <span className='text-amber-500'>Growth</span>
                <div className="text-secondary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">
                <ul role="list" className="divide-y divide-gray-100 border border-amber-500 rounded-md">
                    <AffirmationsList data={growth} />
                </ul>
            </div>
        </details>
    );

    const useMindfulness = renderMindfulness && (
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                <span className='text-sky-600'>Mindfulness</span>
                <div className="text-secondary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">
                <ul role="list" className="divide-y divide-gray-100 border border-sky-600 my-6 rounded-md">
                    <AffirmationsList data={mindfulness} />
                </ul>
            </div>
        </details>
    );

    const usePositivity = renderPositivity && (
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                <span className='text-green-600'>Positivity</span>

                <div className="text-secondary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">
                <ul role="list" className="divide-y divide-gray-100 border border-green-600 my-6 rounded-md">
                    <AffirmationsList data={positivity} />
                </ul>
            </div>
        </details>
    );

    const useSelfWorth = renderSelfWorth && (
        <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                <span className='text-purple-500'>Self Worth</span>

                <div className="text-secondary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </summary>
            <div className="border-t border-t-gray-100 p-4 text-secondary-500">
                <ul role="list" className="divide-y divide-gray-100 border border-purple-500 my-6 rounded-md">
                    <AffirmationsList data={self_worth} />
                </ul>
            </div>
        </details>
    );

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="text-3xl font-semibold text-gray-900">Affirmations</h2>
            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/mind/affirmations/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add affirmation
                    </button>
                </Link>
            </div>

            <div className="mx-auto">
                {none ? <h3>Add your Affirmations!</h3> : (
                    <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                        {useGrowth}
                        {useMindfulness}
                        {usePositivity}
                        {useSelfWorth}
                    </div>
                )}
            </div>
        </div>
    )
}
