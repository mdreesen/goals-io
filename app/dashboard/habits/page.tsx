import { filterHabits } from '@/actions/habits';
import Link from 'next/link';
import HabitList from '@/components/lists/HabitList';

export default async function Page() {
    const filteredGoals = await filterHabits() as any;

    // Filtered Goals
    const personal_goals_arr = filteredGoals?.personal_goals;
    const family_goals_arr = filteredGoals?.family_goals;
    const community_goals_arr = filteredGoals?.community_goals;

    // Render goals sections
    const renderPersonalGoals = filteredGoals.use_personal_goals;
    const renderFamilyGoals = filteredGoals.use_family_goals;
    const renderCommunityGoals = filteredGoals.use_community_goals;

    const none = renderPersonalGoals === false && renderFamilyGoals === false && renderCommunityGoals === false;

    const usePersonalGoals = renderPersonalGoals && (
        <ul role="list" className="divide-y divide-gray-100 border border-amber-500 rounded-md">
            <HabitList data={personal_goals_arr} />
        </ul>
    );

    const useFamilyGoals = renderFamilyGoals && (
        <ul role="list" className="divide-y divide-gray-100 border border-sky-600 my-6 rounded-md">
            <HabitList data={family_goals_arr} />
        </ul>
    );

    const useCommunityGoals = renderCommunityGoals && (
        <ul role="list" className="divide-y divide-gray-100 border border-green-600 my-6 rounded-md">
            <HabitList data={community_goals_arr} />
        </ul>
    );

    return (
        <div>
            <h2 className="text-3xl font-semibold text-gray-900">Habits</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/habits/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add habit
                    </button>
                </Link>
            </div>
            {none && <h3>Add your Habits!</h3>}
            {usePersonalGoals}
            {useFamilyGoals}
            {useCommunityGoals}
        </div>
    )
}
