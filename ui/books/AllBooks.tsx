import { parse } from '@/lib/formatters';
import { fetchBooks } from '@/actions/sections/mind/book';
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import ButtonBack from "@/components/buttons/ButtonBack";
import BooksReadList from '@/ui/books/BooksReadList';

export default async function Books() {

    const books = await fetchBooks() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">Books</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex flex-col gap-4">
                    <ButtonGoTo title='Log New book' path={'/dashboard/mind/books/create'} />
                    <ButtonBack path={'/dashboard/mind'} />
                </div>
            </div>

            {books.allData.length > 0 ?<BooksReadList format={'list'} books={parse(books.allData)}/> : <h3>Log your books!</h3>}
        </div>
    )
}
