import { fetchWeightById } from '@/actions/sections/body/weight';
import WeightForm from '@/components/forms/update/WeightForm';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Weight | Edit',
        default: 'Body | Weight | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const weightData = await fetchWeightById({ id });
    const date = await date_today();

    return (
        <div>
            <WeightForm data={parse({ weightData, date })} />
        </div>
    )
}
