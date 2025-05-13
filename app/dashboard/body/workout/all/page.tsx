import { Suspense } from "react";
import type { Metadata } from "next";
import AllWorkout from "@/ui/workout/AllWorkout";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Workout | All',
        default: 'Body | Workout | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useWorkout = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <AllWorkout />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useWorkout}
        </div>
    )
}
