import WeightForm from '@/components/forms/create/WeightForm';
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';

export default async function Page() {
    const useUser = await fetchUser();

    return (
        <div>
            <WeightForm data={parse(useUser)} />
        </div>
    )
}
