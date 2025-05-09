import { filterHabits } from '@/actions/habits';
import HabitList from '@/components/lists/HabitList';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Title from '@/components/text/Title';

export default async function Habits() {
    const filteredHabits = await filterHabits() as any;

    // Filtered Goals
    const personal_habits_arr = filteredHabits?.personal_habits;
    const family_habits_arr = filteredHabits?.family_habits;
    const marriage_habits_arr = filteredHabits?.marriage_habits;
    const community_habits_arr = filteredHabits?.community_habits;

    // Render habits sections
    const renderPersonalHabits = filteredHabits.use_personal_habits;
    const renderFamilyHabits = filteredHabits.use_family_habits;
    const renderMarriageHabits = filteredHabits.use_marriage_habits;
    const renderCommunityHabits = filteredHabits.use_community_habits;

    // No habits
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

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title title="Habits" />

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
                </Accordion>
            )}
        </div>
    )
}
