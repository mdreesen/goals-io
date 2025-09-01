import Title from '@/components/text/Title';
import Link from 'next/link';
import GraditudesList from '@/ui/gratitude/GratitudesList';
import { fetchGratitudes } from '@/actions/sections/mind/gratitudes';
import { parse } from '@/lib/formatters';

export default async function Gratitudes() {

    const gratitudes = await fetchGratitudes();

    return (
        <div>
            <Title text="Gratitudes" />
            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/mind/gratitude/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add gratitude
                    </button>
                </Link>
            </div>
            <GraditudesList list={parse(gratitudes)} />


        </div>
    )
}
