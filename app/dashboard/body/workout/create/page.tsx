import WorkoutForm from '@/components/forms/create/WorkoutForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Workout | Create',
        default: 'Body | Workout | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <WorkoutForm />
        </div>
    )
}
