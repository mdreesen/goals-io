import { fetchAllColdSoak } from '@/actions/sections/body/coldSoak';
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

            <div>
                <ColdSoakTimer />

                <div>
                    <div className="px-4 sm:px-2 lg:px-4 pt-[2rem] pb-2">
                        <Results data={fetchColdSoak?.results} />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <ColdSoakList list={parse(fetchColdSoak.limited)} />
                    </div>
                </div>
            </div>
        </div>
    )
}
