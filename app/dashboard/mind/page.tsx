import { Suspense } from "react";
import Affirmations from "@/ui/Affirmations";
import Books from "@/ui/books/Books";
import Habits from '@/ui/habits/Habits';
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from '@/actions/settings';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mind | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowAffirmations, useShowBooks, useShowHabits } = useSettings;

    const useAffirmations = useShowAffirmations?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Affirmations />
            </Suspense>
            <div className="border-t border-black/20"></div>
        </>
    );

    const useBooks = useShowBooks?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Books />
            </Suspense>
            <div className="border-t border-black/20"></div>
        </>
    );

    const useHabits = useShowHabits?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Habits />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useAffirmations}
            {useBooks}
            {useHabits}
        </div>
    )
}
