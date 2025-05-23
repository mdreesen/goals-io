import { fetchBibleById } from "@/actions/sections/soul/bible";
import BibleForm from '@/components/forms/update/BibleForm';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Bible | Edit',
        default: 'Spirit | Bible | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const bookData = await fetchBibleById({ id })

    return (
        <div>
            <BibleForm data={parse(bookData)} />
        </div>
    )
}
