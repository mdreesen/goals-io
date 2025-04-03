import { fetchAffirmationsById } from '@/actions/affirmations';
import { parse } from '@/lib/formatters';
import AffirmationForm from '@/components/forms/update/AffirmationForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Affirmations | Edit',
        default: 'Mind | Affirmations | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const data = await fetchAffirmationsById({ id })

    return (
        <div>
            <AffirmationForm data={parse(data)} />
        </div>
    )
}
