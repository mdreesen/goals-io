import { Suspense } from "react";
import Books from '@/ui/Books';
import LoaderPropagate from "@/components/loaders/LoaderPropagate";

export default async function Page() {

    return (
        <div>
            <Suspense fallback={<LoaderPropagate />}>
                <Books />
            </Suspense>
        </div>
    )
}
