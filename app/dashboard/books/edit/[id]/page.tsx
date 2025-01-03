'use client';
import { use, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editBook } from "@/actions/book";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import ButtonDeleteBook from "@/components/buttons/ButtonDeleteBook";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const { data } = useSession();
    const userData = data?.user;

    const findBook = userData?.books.find((item: any) => item._id === id) as any;

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();

    const handleSubmit = async (formData: FormData) => {
        try {
            const r = await editBook({
                _id: findBook?._id,
                book_title: formData.get("book_title"),
                kind_of_book: formData.get("kind_of_book"),
                book_author: formData.get("book_author"),
            });
            console.log(r)
            router.refresh
            router.push(`/dashboard/books`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    const form = (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    Book title
                </label>
                <div className="mt-2">
                    <input
                        id="book_title"
                        name="book_title"
                        type="text"
                        autoComplete="book_title"
                        placeholder="Book title"
                        defaultValue={findBook?.book_title}
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                    Kind of book
                </label>
                <div className="mt-2 grid grid-cols-1">
                    <select
                        id="kind_of_book"
                        name="kind_of_book"
                        autoComplete="kind_of_book"
                        defaultValue={findBook?.kind_of_book}
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    >
                        <option>Audiobook</option>
                        <option>Ebook</option>
                        <option>Printed</option>
                    </select>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    Author of book
                </label>
                <div className="mt-2">
                    <input
                        id="book_author"
                        name="book_author"
                        type="text"
                        autoComplete="book_author"
                        placeholder="Author of book"
                        defaultValue={findBook?.book_author}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                    />
                </div>
            </div>
        </div>
    );


    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Book information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Name and details of book.</p>

                    {form}
                </div>
            </div>

            <div className="mt-6 flex items-center gap-x-6 justify-between">
                <div><ButtonDeleteBook data={findBook} /></div>
                <div className="flex gap-x-6 items-center">
                    <Link href={'/dashboard/books'}>
                        <button type="button" className="text-sm/6 font-semibold text-gray-900 justify-end">
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Save
                    </button>
                </div>
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </form>
    )
}
