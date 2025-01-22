import { Suspense } from "react";
import Bible from '@/ui/Bible';
import LoaderPropagate from "@/components/loaders/LoaderPropagate";

export default async function Page() {

    return (
        <div>
            <Suspense fallback={<LoaderPropagate />}>
                <Bible />
            </Suspense>
        </div>
    )
}
