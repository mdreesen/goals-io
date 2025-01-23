import { Suspense } from "react";
import Affirmations from "@/ui/Affirmations";
import Books from "@/ui/Books";
import Habits from '@/ui/Habits';
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

    return (
        <div className="flex flex-col gap-[4rem]">
            <Suspense fallback={<LoadingScale />}>
                <Affirmations />
            </Suspense>
            <div className="border-t border-black/20"></div>

            <Suspense fallback={<LoadingScale />}>
                <Books />
            </Suspense>

            <div className="border-t border-black/20"></div>


            <Suspense fallback={<LoadingScale />}>
                <Habits />
            </Suspense>
        </div>
    )
}
