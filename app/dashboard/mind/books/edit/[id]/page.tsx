import { fetchBookById } from '@/actions/book';
import BookForm from '@/components/forms/update/BookForm';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Mind | Books | Edit',
        default: 'Mind | Books | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const bookData = await fetchBookById({ id })

    return (
        <div>
            <BookForm data={parse(bookData)} />
        </div>
    )
}
