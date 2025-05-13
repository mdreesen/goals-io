import { Suspense } from "react";
import Devotionals from '@/ui/bible/Devotionals'
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Bible | Devotionals | All',
        default: 'Spirit | Bible | Devotionals | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useBible = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <Devotionals />
            </Suspense>
        </>
    );

    return (
        <div>
            {useBible}
        </div>
    )
}
