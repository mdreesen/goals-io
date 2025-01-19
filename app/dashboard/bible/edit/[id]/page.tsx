import { fetchBibleById } from "@/actions/bible";
import BibleForm from '@/components/forms/update/BibleForm';
import { parse } from '@/lib/formatters';

export default async function Page({ params }: any) {
    const { id } = await params;
    const bookData = await fetchBibleById({ id })

    return (
        <div>
            <BibleForm data={parse(bookData)} />
        </div>
    )
}
