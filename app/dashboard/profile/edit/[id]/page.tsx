import ProfileForm from '@/components/forms/update/ProfileForm';
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Profile | Edit',
        default: 'Profile | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};


export default async function Page() {
    const useUser = await fetchUser();

    return (
        <div>
            <ProfileForm data={parse(useUser)} />
        </div>
    )
}
