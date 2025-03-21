import { Suspense } from "react";
import AllWeight from '@/ui/weight/AllWeight';
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Body | Weight | Ascend",
};

export default async function Page() {

    const useWeight = (
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
