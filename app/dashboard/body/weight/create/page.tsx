import WeightForm from '@/components/forms/create/WeightForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Body | Weight | Create',
        default: 'Body | Weight | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <WeightForm />
        </div>
    )
}
