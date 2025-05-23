import Link from "next/link";
import Image from "next/image";
import { fetchBooks } from '@/actions/sections/mind/book';
import { formatDateAndTime } from '@/lib/formatters'
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import Title from "@/components/text/Title";

export default async function Books() {

    const books = await fetchBooks() ?? [];

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title text="Books" />

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex gap-4 w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <ButtonGoTo title='See all books' path={'/dashboard/mind/books/all'} />
                        <ButtonGoTo title='See book list' path={'/dashboard/mind/books/booklist'} />
                    </div>
                    <div>
                        <ButtonGoTo title='Add book' path={'/dashboard/mind/books/create'} />
                    </div>
                </div>
            </div>

            <div className="py-2">
                <Results data={books.totalBooks} />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {books.limited?.length > 0 ? books?.limited?.reverse().map(async (item: any, index: number) => {

                    const useBookStartDate = item.book_start_date ? `Start Date ${formatDateAndTime(item.book_start_date)}` : '';
                    const useBookEndDate = item.book_end_date ? `End Date ${formatDateAndTime(item.book_end_date)}` : 'Currently Reading';
                    const hasBookList = item?.booklist === 'No' || !item?.booklist;

                    return (
                        <div
                            key={`${item.book_title}-${index}`}
                            className="relative flex items-center w-full rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 hover:border-gray-400"
                        >
                            <Link className="w-full" href={`/dashboard/mind/books/edit/${item.id}`}>
                                <div className="flex-1 flex w-full justify-between items-center">
                                    <div className="w-[auto]">
                                        <p className="text-sm font-medium">{item.book_title}</p>
                                        <p className="text-sm">{item.book_author}</p>
                                        <p className="text-sm">{item.kind_of_book}</p>
                                        <div className='flex flex-col lg:flex-row lg:gap-4'>
                                            {hasBookList && <p className="text-sm">{useBookStartDate}</p>}
                                            {hasBookList && <p className="text-sm">{useBookEndDate}</p>}
                                            {!hasBookList && <p className="text-sm">On your future reads list</p>}
                                        </div>
                                    </div>
                                    {item.book_image && item.book_image !== 'false' && (
                                        <Image
                                            alt="White Raven Logo"
                                            src={`${item.book_image ?? ''}`}
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
