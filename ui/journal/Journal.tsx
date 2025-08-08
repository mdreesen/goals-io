import { fetchEntry } from '@/actions/sections/soul/journal';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import Results from '@/components/showing/Results';
import Title from '@/components/text/Title';
import { parse } from '@/lib/formatters';
import JournalList from '@/ui/journal/JournalList';

export default async function Journal() {

    const journalEntries = await fetchEntry() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title text="Journal" />

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex gap-4 w-full justify-between">
                    <ButtonGoTo title='See all entries' path={'/dashboard/spirit/journal/all'} />
                    <ButtonGoTo title='Add entry' path={'/dashboard/spirit/journal/create'} />
                </div>
            </div>

            <div className="px-4 sm:px-2 lg:px-4">
                <Results data={journalEntries?.results} />
            </div>

            <div className='p-4 rounded'>
                <JournalList list={parse(journalEntries.limited)}/>
            </div>
        </div>
    )
}
