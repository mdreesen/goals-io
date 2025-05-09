import { filterHabits } from '@/actions/habits';
import Link from 'next/link';
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
        <ul role="list" className="divide-y divide-gray-100 border border-green-600 my-6 rounded-md">
            <HabitList data={community_habits_arr} />
        </ul>
    );

    const useFamilyHabits = renderFamilyHabits && (
        <ul role="list" className="divide-y divide-gray-100 border border-sky-600 my-6 rounded-md">
            <HabitList data={family_habits_arr} />
        </ul>
    );

    const useMarriageHabits = renderMarriageHabits && (
        <ul role="list" className="divide-y divide-gray-100 border border-purple-600 my-6 rounded-md">
            <HabitList data={marriage_habits_arr} />
        </ul>
    );

    const usePersonalHabits = renderPersonalHabits && (
        <ul role="list" className="divide-y divide-gray-100 border border-amber-500 rounded-md">
            <HabitList data={personal_habits_arr} />
        </ul>
    );

    const useDoneHabits = renderDoneHabits && (
        <ul role="list" className="divide-y divide-gray-100 border border-black rounded-md mt-4">
            <h3 className="text-lg font-semibold text-gray-900 p-4">Your done habits</h3>
            <HabitList data={done_habits_arr} />
        </ul>
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
            
            {useNone && <h3>Add your Habits!</h3>}
            {usePersonalHabits}
            {useFamilyHabits}
            {useMarriageHabits}
            {useCommunityHabits}
            {useDoneHabits}
        </div>
    )
}
