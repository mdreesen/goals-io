import { filterHabits } from '@/actions/sections/mind/habits';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HabitList from '@/components/lists/HabitList';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import ButtonBack from '@/components/buttons/ButtonBack';

export default async function Habits() {
    const filteredHabits = await filterHabits() as any;

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

    const useNone = filteredHabits?.none_habits;

    const useCommunityHabits = renderCommunityHabits && (
        <AccordionItem value="item-1">
            <AccordionTrigger>Community</AccordionTrigger>
            <AccordionContent>
                <HabitList data={community_habits_arr} />
            </AccordionContent>
        </AccordionItem>
    );

    const useFamilyHabits = renderFamilyHabits && (
        <AccordionItem value="item-2">
            <AccordionTrigger>Family</AccordionTrigger>
            <AccordionContent>
                <HabitList data={family_habits_arr} />
            </AccordionContent>
        </AccordionItem>
    );

    const useMarriageHabits = renderMarriageHabits && (
        <AccordionItem value="item-3">
            <AccordionTrigger>Marriage</AccordionTrigger>
            <AccordionContent>
                <HabitList data={marriage_habits_arr} />
            </AccordionContent>
        </AccordionItem>
    );

    const usePersonalHabits = renderPersonalHabits && (
        <AccordionItem value="item-4">
            <AccordionTrigger>Personal</AccordionTrigger>
            <AccordionContent>
                <HabitList data={personal_habits_arr} />
            </AccordionContent>
        </AccordionItem>
    );

    const useDoneHabits = renderDoneHabits && (
        <AccordionItem value="item-5">
            <AccordionTrigger>Done</AccordionTrigger>
            <AccordionContent>
                <HabitList data={done_habits_arr} />
            </AccordionContent>
        </AccordionItem>
    );


    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Habits</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex flex-col gap-4">
                    <ButtonGoTo title='Add habit' path={'/dashboard/mind/habits/create'} />
                    <ButtonBack path={'/dashboard/mind'} />
                </div>
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
