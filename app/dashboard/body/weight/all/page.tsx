import { Suspense } from "react";
import AllWeight from '@/ui/weight/AllWeight';
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowWeight } = useSettings;

    const useWeight = useShowWeight?.value && (
        <>
            <Suspense fallback={<LoadingScale />}>
                <AllWeight />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useWeight}
        </div>
    )
}
