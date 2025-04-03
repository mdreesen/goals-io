import { Suspense } from "react";
import AllBooks from "@/ui/books/AllBooks";
import LoadingScale from "@/components/loaders/LoadingScale";
import type { Metadata } from "next";

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
            <Suspense fallback={<LoadingScale />}>
                <AllBooks />
            </Suspense>
            <div className="border-t border-black/20"></div>
        </>
    );

    return (
        <div className="flex flex-col gap-[4rem]">
            {useBooks}
        </div>
    )
}
