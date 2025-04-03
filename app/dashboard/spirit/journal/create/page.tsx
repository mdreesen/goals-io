import JournalForm from '@/components/forms/create/JournalForm';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Journal | Create',
        default: 'Spirit | Journal | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {
    const date = await date_today();

    return (
        <div>
            <JournalForm data={parse({ date })} />
        </div>
    )
}
