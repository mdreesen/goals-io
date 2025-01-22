import { Suspense } from "react";
import Weight from '@/ui/Weight';
import LoadingScale from "@/components/loaders/LoadingScale";

export default async function Page() {

    return (
        <div>
            <Suspense fallback={<LoadingScale />}>
                <Weight />
            </Suspense>
        </div>
    )
}
