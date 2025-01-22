import { fetchHabitsById } from '@/actions/habits';
import { parse } from '@/lib/formatters';
import HabitForm from '@/components/forms/update/HabitForm';

export default async function Page({ params }: any) {
    const { id } = await params;
    const goalData = await fetchHabitsById({ id })

    return (
        <div>
            <HabitForm data={parse(goalData)} />
        </div>
    )
}
