import { fetchHabitsById } from '@/actions/habits';
import { parse } from '@/lib/formatters';
import HabitForm from '@/components/forms/update/HabitForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Habits | Edit',
        default: 'Mind | Habits | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const goalData = await fetchHabitsById({ id })

    return (
        <div>
            <HabitForm data={parse(goalData)} />
        </div>
    )
}
