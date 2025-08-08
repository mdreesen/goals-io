import { fetchBible } from '@/actions/sections/soul/bible';
import ButtonBack from '@/components/buttons/ButtonBack';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import Results from '@/components/showing/Results';
import BibleList from './BibleList';
import { parse } from '@/lib/formatters';

export default async function Bible() {

    const bibles = await fetchBible() ?? [];
    const useSermons = bibles?.sermonAll;

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Bible</h2>

            <div className="flex justify-between items-center mt-4 mb-4 sm:mt-0 sm:flex-none">
                <ButtonBack path='/dashboard/spirit' />
                <ButtonGoTo title="Add notes" path="/dashboard/spirit/bible/create" />

            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-xl font-semibold">Sermon Notes</h2>
                <div className='py-4'>
                    <Results data={useSermons?.length.toString()} />
                </div>

                <BibleList list={parse(useSermons)} />
            </div>
        </div>
    )
}
