import HabitForm from '@/components/forms/create/HabitForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Habits | Create',
        default: 'Mind | Habits | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <HabitForm />
        </div>
    )
}
