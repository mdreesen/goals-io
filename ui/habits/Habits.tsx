import { filterHabits } from '@/actions/habits';
import HabitList from '@/components/lists/HabitList';
import ButtonGoTo from '@/components/buttons/ButtonGoTo';

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

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">Habits</h2>

            <div className="flex gap-4 w-full justify-between my-4">
                <ButtonGoTo title='See all habits' path={'/dashboard/mind/habits/all'} />
                <ButtonGoTo title='Add habit' path={'/dashboard/mind/habits/create'} />
            </div>

            {useNone && <h3>Add your Habits!</h3>}
            {usePersonalHabits}
            {useFamilyHabits}
            {useMarriageHabits}
            {useCommunityHabits}
        </div>
    )
}
