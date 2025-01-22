import { Suspense } from "react";
import Habits from '@/ui/Habits';
import Affirmations from "@/ui/Affirmations";
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

    return (
        <div className="flex flex-col gap-4">
            <Suspense fallback={<LoadingScale />}>
                <Habits />
            </Suspense>

            <Suspense fallback={<LoadingScale />}>
                <Affirmations />
            </Suspense>
        </div>
    )
}
