import Link from "next/link";
import { fetchBooks } from '@/actions/book';
import { formatDateAndTime } from '@/lib/formatters'

export default async function Page() {

    const books = await fetchBooks() ?? [];

    return (
        <div>
            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <Link href={'/dashboard/books/create'}>
                    <button
                        type="button"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                    >
                        Add book
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {books.length > 0 ? books?.map((item: any, index: number) => {

                    const useBookStartDate = item.book_start_date ? `Start Date ${formatDateAndTime(item.book_start_date)}` : '';
                    const useBookEndDate = item.book_end_date ? `End Date ${formatDateAndTime(item.book_end_date)}` : '';

                    return (
                        <div
                            key={`${item.book_title}-${index}`}
                            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                            <a href={`/dashboard/books/edit/${item.id}`}>
                                <div className="min-w-0 flex-1">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    <p className="text-sm font-medium text-gray-900">{item.book_title}</p>
                                    <p className="truncate text-sm text-gray-500">{item.book_author}</p>
                                    <p className="truncate text-sm text-gray-500">{item.kind_of_book}</p>
                                    <div className='flex'>
                                        <p className="truncate text-sm text-gray-500">{useBookStartDate}</p>
                                        <p className="truncate text-sm text-gray-500 px-4">{useBookEndDate}</p>

                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                }) : <h3>Add your first book!</h3>}
            </div>
        </div>
    )
}
