import Link from "next/link";
import { fetchBooks } from '@/actions/book';
import { formatDateAndTime } from '@/lib/formatters'
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import ButtonBack from "@/components/buttons/ButtonBack";

export default async function Books() {

    const books = await fetchBooks() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="text-3xl font-semibold text-gray-900">Books</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex flex-col gap-4">
                    <ButtonGoTo title='Add book' path={'/dashboard/mind/books/create'} />
                    <ButtonBack path={'/dashboard/mind'} />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {books.allData.length > 0 ? books?.allData?.reverse().map((item: any, index: number) => {

                    const useBookStartDate = item.book_start_date ? `Start Date ${formatDateAndTime(item.book_start_date)}` : '';
                    const useBookEndDate = item.book_end_date ? `End Date ${formatDateAndTime(item.book_end_date)}` : 'Currently Reading';

                    return (
                        <div
                            key={`${item.book_title}-${index}`}
                            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                            <Link href={`/dashboard/mind/books/edit/${item.id}`}>
                                <div className="min-w-0 flex-1">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    <p className="text-sm font-medium text-gray-900">{item.book_title}</p>
                                    <p className="truncate text-sm text-gray-500">{item.book_author}</p>
                                    <p className="truncate text-sm text-gray-500">{item.kind_of_book}</p>
                                    <div className='flex flex-col lg:flex-row lg:gap-4'>
                                        <p className="truncate text-sm text-gray-500">{useBookStartDate}</p>
                                        <p className="truncate text-sm text-gray-500">{useBookEndDate}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                }) : <h3>Add your books!</h3>}
            </div>
        </div>
    )
}
