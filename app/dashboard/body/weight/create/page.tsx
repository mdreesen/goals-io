import WeightForm from '@/components/forms/create/WeightForm';
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';

export default async function Page() {
    const useUser = await fetchUser();
    const date = await date_today();

    return (
        <div>
            <WeightForm data={parse({ useUser, date })} />
        </div>
    )
}
