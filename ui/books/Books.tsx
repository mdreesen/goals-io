import Link from "next/link";
import Image from "next/image";
import { parse } from '@/lib/formatters';
import { fetchBooks } from '@/actions/sections/mind/book';
import ButtonGoTo from "@/components/buttons/ButtonGoTo";
import Results from "@/components/showing/Results";
import Title from "@/components/text/Title";
import BooksReadList from '@/ui/books/BooksReadList';
import NoDataText from "@/components/text/NoDataText";

export default async function Books() {

    const books = await fetchBooks() ?? [];

    const useCurrentBook = (
        <div className="pb-[2rem] justify-center flex gap-6 items-baseline">
            {books.useCurrentlyReading.map((item: any, index: number) => (
                <Link key={`$book-${index}`} className="w-[10rem] h-full flex flex-col gap-2" href={`/dashboard/mind/books/edit/${item.id}`}>
                    {item.book_image ? (
                        <Image
                            alt={`${item.book_title} of ${index}`}
                            src={`${item.book_image ?? ''}`}
                            className="w-[10rem] h-[250px] object-fill"
                            height={200}
                            width={400}
                        />
                    ) : (
                        <Image
                            alt={`Book image not available`}
                            src={`/assets/thumbnail_none.png`}
                            className="w-[10rem] h-[250px] object-fill"
                            height={200}
                            width={400}
                        />
                    )}

                    <div className="text-md font-semibold">
                        {item.book_title}
                    </div>
                    <div className="text-sm">
                        {item.book_author}
                    </div>
                </Link>
            ))}
        </div>
    );

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <Title text="Books" />

            <div className="flex justify-end mt-4 mb-4 sm:mt-0 sm:flex-none">
                <div className="flex gap-4 w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <ButtonGoTo title='See all books' path={'/dashboard/mind/books/all'} />
                        <ButtonGoTo title='See Saved books' path={'/dashboard/mind/books/booklist'} />
                    </div>
                    <div>
                        <ButtonGoTo title='Log New Book' path={'/dashboard/mind/books/create'} />
                    </div>
                </div>
            </div>

            {books.useCurrentlyReading.length > 0 && (
                <div className="pt-4">
                    <Title fontSize="2xl" text="Currently Reading" />
                    {useCurrentBook}
                </div>
            )}

            <div className="py-2">
                <Results data={books.totalBooks} />
            </div>

            {books.limited.length > 0 ? <BooksReadList format={'carousel'} books={parse(books.limited)} /> : <NoDataText text="Log your books!" />}
        </div>
    )
}
