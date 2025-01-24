import { Suspense } from "react";
import Bible from '@/ui/Bible';
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spirit | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowBible } = useSettings;

    const useBible = useShowBible?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Bible />
            </Suspense>
        </>
    );

    return (
        <div>
            {useBible}
        </div>
    )
}
