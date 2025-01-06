import WeightForm from '@/components/forms/create/WeightForm';
import { fetchUser } from '@/actions/user';

export default async function Page() {
    const useUser = await fetchUser();

    return (
        <div>
            <WeightForm data={JSON.parse(JSON.stringify(useUser))} />
        </div>
    )
}
