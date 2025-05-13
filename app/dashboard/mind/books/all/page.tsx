import { Suspense } from "react";
import AllBooks from "@/ui/books/AllBooks";
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";
import UseLoadingScale from "@/components/loaders/UseLoadingScale";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Books | All',
        default: 'Mind | Books | All',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    const useBooks = (
        <>
            <Suspense fallback={<UseLoadingScale />}>
                <AllBooks />
            </Suspense>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useBooks}
        </div>
    )
}
