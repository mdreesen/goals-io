import JournalForm from '@/components/forms/create/JournalForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Journal | Create',
        default: 'Spirit | Journal | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <JournalForm />
        </div>
    )
}
