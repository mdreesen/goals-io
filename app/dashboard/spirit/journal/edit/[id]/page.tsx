import { fetchEntryById } from "@/actions/journal";
import JournalForm from '@/components/forms/update/JournalForm';
import { parse } from '@/lib/formatters';

export default async function Page({ params }: any) {
    const { id } = await params;
    const journalData = await fetchEntryById({ id })

    return (
        <div>
            <JournalForm data={parse(journalData)} />
        </div>
    )
}
