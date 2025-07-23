import { Suspense } from "react";
import AllHabits from '@/ui/habits/AllHabits';
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Books | All',
        default: 'Mind | Books | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useHabits = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <AllHabits />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem] px-[1rem]">
            {useHabits}
        </div>
    )
}
