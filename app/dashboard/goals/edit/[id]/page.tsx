import { fetchGoalsById } from '@/actions/goals';
import { parse } from '@/lib/formatters';
import GoalForm from '@/components/forms/update/GoalForm';

export default async function Page({ params }: any) {
    const { id } = await params;
    const goalData = await fetchGoalsById({ id })

    return (
        <div>
            <GoalForm data={parse(goalData)} />
        </div>
    )
}
