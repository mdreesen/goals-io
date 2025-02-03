import { Suspense } from "react";
import AllBooks from "@/ui/books/AllBooks";
import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from '@/actions/settings';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mind | Ascend",
};

export default async function Page() {
    const useSettings = await fetchSettings() ?? [];
    const { useShowBooks } = useSettings;

    const useBooks = useShowBooks?.value && (
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
