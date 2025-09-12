import BibleForm from '@/components/forms/create/BibleForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Bible | Create',
        default: 'Spirit | Bible | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <BibleForm />
        </div>
    )
}
