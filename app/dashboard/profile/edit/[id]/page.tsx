import ProfileForm from '@/components/forms/update/ProfileForm';
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';


export default async function Page() {
    const useUser = await fetchUser();

    return (
        <div>
            <ProfileForm data={parse(useUser)} />
        </div>
    )
}
