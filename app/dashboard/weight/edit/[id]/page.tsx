import { fetchWeightById } from '@/actions/weight';
import WeightForm from '@/components/forms/update/WeightForm';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';

export default async function Page({ params }: any) {
    const { id } = await params;
    const weightData = await fetchWeightById({ id });
    const date = await date_today();

    return (
        <div>
            <WeightForm data={parse({ weightData, date })} />
        </div>
    )
}
