import { fetchBible } from '@/actions/sections/soul/bible';
import { parse } from '@/lib/formatters';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import Title from '@/components/text/Title';
import BibleList from '@/ui/bible/BibleList';
import Results from '@/components/showing/Results';

export default async function Bible() {

    const bibles = await fetchBible() ?? [];
    const useSermons = bibles.sermonLimited;
    const useDevotionals = bibles.devotionalLimited;

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title text="Bible" />

            <div className='flex items-center justify-end'>
                <ButtonGoTo title="Add notes" path="/dashboard/spirit/bible/create" />

            </div>

            <div className='mb-6'>
            <Title fontSize="2xl" text="Sermon Notes" />

                <div className='flex justify-end pt-4'>
                    <ButtonGoTo title="All sermon notes" path="/dashboard/spirit/bible/all/sermons" />
                </div>

                <div className='py-4'>
                    <Results data={bibles.sermonAll.length.toString()} />
                </div>

                <BibleList list={parse(useSermons)} />
            </div>

            <div className="border-t border-black/20"></div>

            <div className='mb-6'>
                <Title fontSize="2xl" text="Devotional Notes" />
                <div className='flex justify-end pt-4'>
                    <ButtonGoTo title="All devotional notes" path="/dashboard/spirit/bible/all/devotionals" />
                </div>

                <div className='py-4'>
                    <Results data={bibles.devotionalAll.length.toString()} />
                </div>

                <BibleList list={parse(useDevotionals)} />
            </div>
        </div>
    )
}
