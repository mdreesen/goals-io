import { filterHabits } from '@/actions/sections/mind/habits';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Title from '@/components/text/Title';
import HabitList from '@/ui/habits/HabitsList';
import { parse } from '@/lib/formatters';

export default async function Habits() {
    const filteredHabits = await filterHabits() as any;
    console.log(filteredHabits)
    // Filtered Goals
    const personal_habits_arr = filteredHabits?.personal_habits;
    const family_habits_arr = filteredHabits?.family_habits;
    const marriage_habits_arr = filteredHabits?.marriage_habits;
    const community_habits_arr = filteredHabits?.community_habits;
    const done_habits_arr = filteredHabits?.done_habits;

    // Render habits sections
    const renderPersonalHabits = filteredHabits.use_personal_habits;
    const renderFamilyHabits = filteredHabits.use_family_habits;
    const renderMarriageHabits = filteredHabits.use_marriage_habits;
    const renderCommunityHabits = filteredHabits.use_community_habits;
    const renderDoneHabits = filteredHabits.use_done_habits;

    // No habits
    const useNone = filteredHabits?.none_habits;

    const useCommunityHabits = renderCommunityHabits && (
        <AccordionItem value="item-1">
            <AccordionTrigger>Community</AccordionTrigger>
            <AccordionContent>
                <HabitList habits={parse(community_habits_arr)} />
            </AccordionContent>
        </AccordionItem>
    );

    const useFamilyHabits = renderFamilyHabits && (
        <AccordionItem value="item-2">
            <AccordionTrigger>Family</AccordionTrigger>
            <AccordionContent>
                <HabitList habits={parse(family_habits_arr)} />
            </AccordionContent>
        </AccordionItem>
    );

    const useMarriageHabits = renderMarriageHabits && (
        <AccordionItem value="item-3">
            <AccordionTrigger>Marriage</AccordionTrigger>
            <AccordionContent>
                <HabitList habits={parse(marriage_habits_arr)} />
            </AccordionContent>
        </AccordionItem>
    );

    const usePersonalHabits = renderPersonalHabits && (
        <AccordionItem value="item-4">
            <AccordionTrigger>Personal</AccordionTrigger>
            <AccordionContent>
                <HabitList habits={parse(personal_habits_arr)} />
            </AccordionContent>
        </AccordionItem>
    );

    const useDoneHabits = renderDoneHabits && (
        <AccordionItem value="item-5">
            <AccordionTrigger>Done</AccordionTrigger>
            <AccordionContent>
                <HabitList habits={parse(done_habits_arr)} />
            </AccordionContent>
        </AccordionItem>
    );

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title text="Habits" />

            <div className="flex gap-4 w-full justify-between my-4">
                <ButtonGoTo title='See all habits' path={'/dashboard/mind/habits/all'} />
                <ButtonGoTo title='Add habit' path={'/dashboard/mind/habits/create'} />
            </div>

            {useNone ? <h3>Add your Habits!</h3> : (
                <Accordion type="single" collapsible className="w-full">
                    {useCommunityHabits}
                    {useFamilyHabits}
                    {useMarriageHabits}
                    {usePersonalHabits}
                    {useDoneHabits}
                </Accordion>
            )}
        </div>
    )
}
