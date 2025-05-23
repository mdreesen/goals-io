import WorkoutForm from '@/components/forms/update/WorkoutForm';
import { fetchWorkoutById } from '@/actions/sections/body/workout';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Workout | Edit',
        default: 'Body | Workout | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const workoutData = await fetchWorkoutById({ id });

    return (
        <div>
            <WorkoutForm data={parse({ workoutData })} />
        </div>
    )
}
