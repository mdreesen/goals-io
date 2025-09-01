import GratitudeForm from '@/components/forms/create/GratitudeForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Gratitudes | Create',
        default: 'Mind | Gratitudes | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <GratitudeForm />
        </div>
    )
}
