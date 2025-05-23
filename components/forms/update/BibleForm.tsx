'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editBible } from "@/actions/bible";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import bible_books from '@/lib/dropdown/bible_books.json';
import ButtonDeleteBible from "@/components/buttons/ButtonDeleteBible";
import ButtonCancel from "@/components/buttons/ButtonCancel";

export default function BibleForm({ data }: any) {

    const [error, setError] = useState<string>();
    const [ loading, setLoading ] = useState(false);

    const router = useRouter();
    const ref = useRef(null);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true)
        try {
            await editBible({
                _id: data?._id,
                book_title: formData.get("book_title"),
                chapter: formData.get("chapter"),
                verses: formData.get("verses"),
                notes: formData.get("notes"),
                type: formData.get("type"),
            });
            setLoading(false)

            router.refresh
            router.push(`/dashboard/spirit`);
        } catch (error) {
            setError(error as string)
            console.log(error);
            setLoading(false)
        }
    };

    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Bible notes</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-3">
                            <label htmlFor="type" className="block text-sm/6 font-medium">
                                Type of note
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="type"
                                    name="type"
                                    autoComplete="type"
                                    defaultValue={data?.type ?? ''}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                >
                                    <option>Sermon note</option>
                                    <option>Devotional note</option>

                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="book_title" className="block text-sm/6 font-medium">
                                Book of the Bible
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="book_title"
                                    name="book_title"
                                    autoComplete="book_title"
                                    defaultValue={data?.book_title ?? ''}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                >
                                    {bible_books.map((item: any) => (
                                        <option key={`${item.book}`}>{item.book}</option>
                                    ))}
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="chapter" className="block text-sm/6 font-medium">
                                Chapter
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                                    <input
                                        id="chapter"
                                        name="chapter"
                                        type="text"
                                        placeholder="1"
                                        defaultValue={data?.chapter ?? ''}
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="verses" className="block text-sm/6 font-medium">
                                Verse(s)
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                                    <input
                                        id="verses"
                                        name="verses"
                                        type="text"
                                        placeholder="1-2"
                                        defaultValue={data?.verses ?? ''}
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="notes" className="block text-sm/6 font-medium">
                                Notes
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows={3}
                                    placeholder="Your bible notes"
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                    defaultValue={data?.notes ?? ''}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-x-6 justify-between">
                <div><ButtonDeleteBible data={data} /></div>
                <div className="flex gap-x-6 items-center">
                    <ButtonCancel path={'/dashboard/spirit'} />
                    <button
                        type="submit"
                        className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </div>
            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </form>
    )
}
