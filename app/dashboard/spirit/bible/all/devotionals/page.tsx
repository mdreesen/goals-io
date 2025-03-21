import { Suspense } from "react";
import Devotionals from '@/ui/bible/Devotionals'
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirit | Devotionals | Ascend",
};

export default async function Page() {

    const useBible = (
        <>
            <Suspense fallback={<LoadingScale />}>
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
