import { Suspense } from "react";
import Affirmations from "@/ui/Affirmations";
import Books from "@/ui/books/Books";
import Habits from '@/ui/habits/Habits';
import { fetchSettings } from '@/actions/settings';
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind',
        default: 'Mind',
      },
      description: "Set Habits. Achieve greatness.",
      metadataBase: new URL('https://www.ascendpod.com'),
  };

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowAffirmations, useShowBooks, useShowHabits } = useSettings;

    const dividerOne = useShowBooks?.value || useShowHabits?.value;
    const dividerTwo = useShowHabits?.value;

    const useAffirmations = useShowAffirmations?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Affirmations />
            </Suspense>
            {dividerOne && <div className="border-t border-black/20"></div>}
        </>
    );

    const useBooks = useShowBooks?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Books />
            </Suspense>
            {dividerTwo && <div className="border-t border-black/20"></div>}
        </>
    );

    const useHabits = useShowHabits?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Habits />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem] px-[1rem]">
            {useAffirmations}
            {useBooks}
            {useHabits}
        </div>
    )
}
