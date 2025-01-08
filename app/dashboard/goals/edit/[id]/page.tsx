import { fetchGoalsById } from '@/actions/goals';
import GoalForm from '@/components/forms/update/GoalForm';

export default async function Page({ params }: any) {
    const { id } = await params;
    const goalData = await fetchGoalsById({ id })

    return (
        <div>
            <GoalForm data={JSON.parse(JSON.stringify(goalData))} />
        </div>
    )
}
