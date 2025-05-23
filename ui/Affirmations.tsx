import { filterAffirmations } from '@/actions/sections/mind/affirmations';
import AffirmationsList from '@/components/lists/AffirmationsList';
import Title from '@/components/text/Title';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from 'next/link';

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

    const useNone = renderGrowth === false && renderMindfulness === false && renderPositivity === false && renderSelfWorth === false;

    const useGrowth = renderGrowth && (
        <AccordionItem value="item-1">
            <AccordionTrigger>Growth</AccordionTrigger>
            <AccordionContent>
                <AffirmationsList data={growth} />
            </AccordionContent>
        </AccordionItem>
    );

    const useMindfulness = renderMindfulness && (
        <AccordionItem value="item-2">
            <AccordionTrigger>Mindfulness</AccordionTrigger>
            <AccordionContent>
                <AffirmationsList data={mindfulness} />
            </AccordionContent>
        </AccordionItem>
    );

    const usePositivity = renderPositivity && (
        <AccordionItem value="item-3">
            <AccordionTrigger>Positivity</AccordionTrigger>
            <AccordionContent>
                <AffirmationsList data={positivity} />
            </AccordionContent>
        </AccordionItem>
    );

    const useSelfWorth = renderSelfWorth && (
        <AccordionItem value="item-4">
            <AccordionTrigger>Self Worth</AccordionTrigger>
            <AccordionContent>
                <AffirmationsList data={self_worth} />
            </AccordionContent>
        </AccordionItem>
    );

    return (
        <div>
            <Title text="Affirmations" />
            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/mind/affirmations/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add affirmation
                    </button>
                </Link>
            </div>
            {useNone ? <h3>Add your Affirmations!</h3> : (
                <Accordion type="single" collapsible className="w-full">
                    {useGrowth}
                    {useMindfulness}
                    {usePositivity}
                    {useSelfWorth}
                </Accordion>
            )}

        </div>
    )
}
