import { Suspense } from "react";
import Books from '@/ui/Books';
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

    return (
        <div>
            <Suspense fallback={<LoadingScale />}>
                <Books />
            </Suspense>
        </div>
    )
}
