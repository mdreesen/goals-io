import BibleForm from '@/components/forms/create/BibleForm';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";
import { date_today } from '@/lib/date_time';

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Bible | Create',
        default: 'Spirit | Bible | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {
    const date = await date_today();

    return (
        <div>
            <BibleForm data={parse({ date })} />
        </div>
    )
}
