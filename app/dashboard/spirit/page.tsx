import { Suspense } from "react";
import Bible from '@/ui/Bible';
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowBible } = useSettings;

    const useBible = useShowBible?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <Bible />
            </Suspense>
            <div className="border-t border-black/20"></div>
        </>
    );

    return (
        <div>
            {useBible}
        </div>
    )
}
