import { Suspense } from "react";
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";
import AllJournal from "@/ui/journal/AllJournal";

export const metadata: Metadata = {
  title: "Spirit | Journal | Ascend",
};

export default async function Page() {

    const useJournal = (
        <>
            <Suspense fallback={<LoadingScale />}>
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
