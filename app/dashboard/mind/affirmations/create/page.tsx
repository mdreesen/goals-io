import AffirmationForm from '@/components/forms/create/AffirmationForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Affirmations | Create',
        default: 'Mind | Affirmations | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <AffirmationForm />
        </div>
    )
}
