import { fetchEntry } from '@/actions/sections/soul/journal';
import ButtonBack from '@/components/buttons/ButtonBack';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import JournalList from '@/ui/journal/JournalList';
import { parse } from '@/lib/formatters';

export default async function Journal() {

    const journalEntries = await fetchEntry() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Journal</h2>
            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex flex-col gap-4">
                    <ButtonGoTo title='Add entry' path={'/dashboard/spirit/journal/create'} />
                    <ButtonBack path={'/dashboard/spirit'} />
                </div>
            </div>

            <div className='p-4 rounded'>
                <JournalList list={parse(journalEntries?.all)} />
            </div>
        </div>
    )
}
