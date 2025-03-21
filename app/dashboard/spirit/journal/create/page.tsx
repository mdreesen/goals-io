import JournalForm from '@/components/forms/create/JournalForm';
import { parse } from '@/lib/formatters';
import { date_today } from '@/lib/date_time';

export default async function Page() {
    const date = await date_today();

    return (
        <div>
            <JournalForm data={parse({ date })} />
        </div>
    )
}
