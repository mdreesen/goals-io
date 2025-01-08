import { fetchBookById } from '@/actions/book';
import BookForm from '@/components/forms/update/BookForm';
import { parse } from '@/lib/formatters';

export default async function Page({ params }: any) {
    const { id } = await params;
    const bookData = await fetchBookById({ id })

    return (
        <div>
            <BookForm data={parse(bookData)} />
        </div>
    )
}
