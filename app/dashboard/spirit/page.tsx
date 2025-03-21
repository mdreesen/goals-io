import { Suspense } from "react";
import Bible from '@/ui/bible/Bible';
import Journal from '@/ui/journal/Journal';
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirit | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowBible, useShowJournal } = useSettings;

    const useBible = useShowBible?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Bible />
            </Suspense>
            <div className="border-t border-black/20"></div>
        </>
    );

    const useJournal = useShowJournal?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
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
