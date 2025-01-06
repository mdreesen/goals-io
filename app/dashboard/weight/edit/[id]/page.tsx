import { fetchWeightById } from '@/actions/weight';
import WeightForm from '@/components/forms/update/WeightForm';

export default async function Page({ params }: any) {
    const { id } = await params;
    const weightData = await fetchWeightById({ id });

    return (
        <div>
            <WeightForm data={JSON.parse(JSON.stringify(weightData))} />
        </div>
    )
}
