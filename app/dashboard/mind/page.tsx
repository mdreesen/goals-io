import { Suspense } from "react";
import Habits from '@/ui/Habits';
import Affirmations from "@/ui/Affirmations";
import LoaderPropagate from "@/components/loaders/LoaderPropagate";

export default async function Page() {

    return (
        <div className="flex flex-col gap-4">
            <Suspense fallback={<LoaderPropagate />}>
                <Habits />
            </Suspense>

            <Suspense fallback={<LoaderPropagate />}>
                <Affirmations />
            </Suspense>
        </div>
    )
}
