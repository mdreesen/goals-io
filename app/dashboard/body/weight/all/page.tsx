import { Suspense } from "react";
import AllWeight from '@/ui/weight/AllWeight';
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Weight | All',
        default: 'Body | Weight | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useWeight = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
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
