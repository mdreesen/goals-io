import { Suspense } from "react";
import Sermons from '@/ui/bible/Sermons'
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirit | Sermons | Ascend",
};

export default async function Page() {

    const useBible = (
        <>
            <Suspense fallback={<LoadingScale />}>
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
