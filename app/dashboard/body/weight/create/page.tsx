import WeightForm from '@/components/forms/create/WeightForm';
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Weight | Create',
        default: 'Body | Weight | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {
    const useUser = await fetchUser();
    const date = await date_today();

    return (
        <div>
            <WeightForm data={parse({ useUser, date })} />
        </div>
    )
}
