import { fetchBookById } from '@/actions/book';
import EditBook from '@/components/forms/update/EditBook';

export default async function Page({ params }: any) {
    const { id } = await params;
    const bookData = await fetchBookById({ id })

    return (
        <div>
            <EditBook data={JSON.parse(JSON.stringify(bookData))} />
        </div>
    )
}
