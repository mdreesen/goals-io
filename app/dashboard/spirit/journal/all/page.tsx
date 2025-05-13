import { Suspense } from "react";
import LoadingScale from "@/components/loaders/LoadingScale";
import AllJournal from "@/ui/journal/AllJournal";
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Journal | All',
        default: 'Spirit | Journal | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useJournal = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <AllJournal />
            </Suspense>
        </>
    );

    return (
        <div>
            {useJournal}
        </div>
    )
}
