import ProfileForm from '@/components/forms/update/ProfileForm';
import { fetchUser } from '@/actions/user';


export default async function Page() {
    const useUser = await fetchUser();


    return (
        <div>
            <ProfileForm data={JSON.parse(JSON.stringify(useUser))} />
        </div>
    )
}
