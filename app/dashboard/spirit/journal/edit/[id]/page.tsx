import { fetchEntryById } from "@/actions/journal";
import JournalForm from '@/components/forms/update/JournalForm';
import { parse } from '@/lib/formatters';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Spirit | Journal | Edit',
        default: 'Spirit | Journal | Edit',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function Page({ params }: any) {
    const { id } = await params;
    const journalData = await fetchEntryById({ id })

    return (
        <div>
            <JournalForm data={parse(journalData)} />
        </div>
    )
}
