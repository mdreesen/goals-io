import { fetchAllColdSoak } from '@/actions/sections/body/coldSoak';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import Results from '@/components/showing/Results';
import Title from '@/components/text/Title';
import { parse } from '@/lib/formatters';
import ColdSoakList from '@/ui/coldSoak/ColdSoakList';
import ColdSoakTimer from '@/components/timers/ColdSoakTimer';

export default async function Journal() {

    const fetchColdSoak = await fetchAllColdSoak() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title text="Cold Soak" />

            <div className="px-4 sm:px-2 lg:px-4">
                {/* <Results data={journalEntries?.results} /> */}
            </div>

            <div className='py-4'>
                <ColdSoakTimer />

                <div className='flex justify-center items-center'>
                    <ColdSoakList list={parse(fetchColdSoak.limited)} />
                </div>
            </div>
        </div>
    )
}
