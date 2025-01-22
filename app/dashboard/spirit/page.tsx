import { Suspense } from "react";
import Bible from '@/ui/Bible';
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

    return (
        <div>
            <Suspense fallback={<LoadingScale />}>
                <Bible />
            </Suspense>
        </div>
    )
}
