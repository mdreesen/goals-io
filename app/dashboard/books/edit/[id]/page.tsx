import { fetchBookById } from '@/actions/book';
import BookForm from '@/components/forms/update/BookForm';

export default async function Page({ params }: any) {
    const { id } = await params;
    const bookData = await fetchBookById({ id })

    return (
        <div>
            <BookForm data={JSON.parse(JSON.stringify(bookData))} />
        </div>
    )
}
