import Link from "next/link";
import Image from "next/image";
import { fetchBooks } from '@/actions/book';
import { formatDateAndTime } from '@/lib/formatters'
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";

export default async function Books() {

    const books = await fetchBooks() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <h2 className="text-3xl font-semibold text-gray-900">Books</h2>

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex gap-4 w-full justify-between">
                    <ButtonGoTo title='See all books' path={'/dashboard/mind/books/all'} />
                    <ButtonGoTo title='Add book' path={'/dashboard/mind/books/create'} />
                </div>
            </div>

            <div className="py-2">
                <Results data={books.totalBooks} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {books.limited?.length > 0 ? books?.limited?.reverse().map(async (item: any, index: number) => {

                    const useBookStartDate = item.book_start_date ? `Start Date ${formatDateAndTime(item.book_start_date)}` : '';
                    const useBookEndDate = item.book_end_date ? `End Date ${formatDateAndTime(item.book_end_date)}` : 'Currently Reading';
                    const useImage = await item?.book_image;

                    return (
                        <div
                            key={`${item.book_title}-${index}`}
                            className="relative flex items-center rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                            <Link href={`/dashboard/mind/books/edit/${item.id}`}>
                                <div className="flex-1 flex w-full justify-between items-center">
                                    <div className="w-[38vw]">
                                        <p className="text-sm font-medium text-gray-900">{item.book_title}</p>
                                        <p className="truncate text-sm text-gray-500">{item.book_author}</p>
                                        <p className="truncate text-sm text-gray-500">{item.kind_of_book}</p>
                                        <div className='flex flex-col lg:flex-row lg:gap-4'>
                                            <p className="truncate text-sm text-gray-500">{useBookStartDate}</p>
                                            <p className="truncate text-sm text-gray-500">{useBookEndDate}</p>
                                        </div>
                                    </div>
                                    {item.book_image && (
                                        <Image
                                            alt="White Raven Logo"
                                            src={`${item.book_image}`}
                                            className="h-[8rem] w-[auto] object-cover flex-none bg-gray-50 scale-75"
                                            height={200}
                                            width={400}
                                        />
                                    )}

                                </div>
                            </Link>
                        </div>
                    );
                }) : <h3>Add your books!</h3>}
            </div>
        </div>
    )
}
