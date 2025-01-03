import Link from "next/link";
import { fetchBooks } from '@/actions/book';

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
                {books.length > 0 ? books?.map((item: any, index: number) => (
                    <div
                        key={`${item.book_title}-${index}`}
                        className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-gray-900 focus-within:ring-offset-2 hover:border-gray-400"
                    >
                        <Link href={`/dashboard/books/edit/${item.id}`}>
                            {/* <div className="shrink-0">
                            <img alt="" src={item.imageUrl} className="size-10 rounded-full" />
                        </div> */}
                            <div className="min-w-0 flex-1">
                                <a href="#" className="focus:outline-none">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    <p className="text-sm font-medium text-gray-900">{item.book_title}</p>
                                    <p className="truncate text-sm text-gray-500">{item.book_author}</p>
                                    <p className="truncate text-sm text-gray-500">{item.kind_of_book}</p>
                                </a>
                            </div>
                        </Link>
                    </div>
                )) : <h3>Add your first book!</h3>}
            </div>
        </div>
    )
}
