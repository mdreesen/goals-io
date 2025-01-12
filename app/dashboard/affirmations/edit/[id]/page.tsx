import { fetchAffirmationsById } from '@/actions/affirmations';
import { parse } from '@/lib/formatters';
import AffirmationForm from '@/components/forms/update/AffirmationForm';

export default async function Page({ params }: any) {
    const { id } = await params;
    const data = await fetchAffirmationsById({ id })

    return (
        <div>
            <AffirmationForm data={parse(data)} />
        </div>
    )
}
