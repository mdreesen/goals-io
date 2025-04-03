import BookForm from '@/components/forms/create/BookForm';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Books | Create',
        default: 'Mind | Books | Create',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page() {

    return (
        <div>
            <BookForm/>
        </div>
    )
}
