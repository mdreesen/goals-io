import { Suspense } from "react";
import Weight from '@/ui/Weight';
import LoaderPropagate from "@/components/loaders/LoaderPropagate";

export default async function Page() {

    return (
        <div>
            <Suspense fallback={<LoaderPropagate />}>
                <Weight />
            </Suspense>
        </div>
    )
}
