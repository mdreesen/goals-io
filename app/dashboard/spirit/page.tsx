import { Suspense } from "react";
import Bible from '@/ui/bible/Bible';
import Journal from '@/ui/journal/Journal';
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit',
        default: 'Spirit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowBible, useShowJournal } = useSettings;

    const dividerOne = useShowJournal?.value;

    const useBible = useShowBible?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Bible />
            </Suspense>
            {dividerOne && <div className="border-t border-black/20"></div>}
        </>
    );

    const useJournal = useShowJournal?.value && (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Journal />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useBible}
            {useJournal}
        </div>
    )
}
