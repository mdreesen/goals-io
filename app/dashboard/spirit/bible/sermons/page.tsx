import { Suspense } from "react";
import Bible from '@/ui/bible/Bible';
import Sermons from '@/ui/bible/Sermons'
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirit | Sermons | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowBible } = useSettings;

    const useBible = useShowBible?.value && (
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
