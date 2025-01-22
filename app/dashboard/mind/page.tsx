import { Suspense } from "react";
import Habits from '@/ui/Habits';
import Affirmations from "@/ui/Affirmations";

export default async function Page() {

    return (
        <div className="flex flex-col gap-4">
            <Habits />
            <Affirmations />
        </div>
    )
}
