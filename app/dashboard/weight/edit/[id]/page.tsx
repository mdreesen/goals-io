import { fetchWeightById } from '@/actions/weight';
import WeightForm from '@/components/forms/update/WeightForm';
import { parse } from '@/lib/formatters';

export default async function Page({ params }: any) {
    const { id } = await params;
    const weightData = await fetchWeightById({ id });

    return (
        <div>
            <WeightForm data={parse(weightData)} />
        </div>
    )
}
