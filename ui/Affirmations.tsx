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
        <ul role="list" className="divide-y divide-gray-100 border border-amber-500 rounded-md">
            <AffirmationsList data={growth} />
        </ul>
    );

    const useMindfulness = renderMindfulness && (
        <ul role="list" className="divide-y divide-gray-100 border border-sky-600 my-6 rounded-md">
            <AffirmationsList data={mindfulness} />
        </ul>
    );

    const usePositivity = renderPositivity && (
        <ul role="list" className="divide-y divide-gray-100 border border-green-600 my-6 rounded-md">
            <AffirmationsList data={positivity} />
        </ul>
    );

    const useSelfWorth = renderSelfWorth && (
        <ul role="list" className="divide-y divide-gray-100 border border-purple-500 my-6 rounded-md">
            <AffirmationsList data={self_worth} />
        </ul>
    );

    return (
        <div>
            <h2 className="text-3xl font-semibold text-gray-900">Affirmations</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/mind/affirmations/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add affirmation
                    </button>
                </Link>
            </div>
            {none && <h3>Add your Affirmations!</h3>}
            {useGrowth}
            {useMindfulness}
            {usePositivity}
            {useSelfWorth}
        </div>
    )
}
