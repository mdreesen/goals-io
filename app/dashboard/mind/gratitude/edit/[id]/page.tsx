import { fetchGratitudeById } from '@/actions/sections/mind/gratitudes';
import { parse } from '@/lib/formatters';
import GratitudeForm from '@/components/forms/update/GratitudeForm';
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

    const data = await fetchGratitudeById({ id })

    return (
        <div>
            <GratitudeForm data={parse(data)} />
        </div>
    )
};
