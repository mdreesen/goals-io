import { Suspense } from "react";
import Sermons from '@/ui/bible/Sermons'
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Bible | Sermons | All',
        default: 'Spirit | Bible | Sermons | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useBible = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Sermons />
            </Suspense>
        </>
    );

    return (
        <div>
            {useBible}
        </div>
    )
}
