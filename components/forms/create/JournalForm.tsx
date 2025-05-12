'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { addEntry } from "@/actions/journal";
import Link from "next/link";

export default function JournalForm({ data }: any) {

    const [error, setError] = useState<string>();

    const router = useRouter();
    const ref = useRef(null);

    const handleSubmit = async (formData: FormData) => {
        try {
          await addEntry({
            title: formData.get("title"),
            entry: formData.get("entry"),
            date: data.date,
          });
          router.refresh
          router.push(`/dashboard/spirit`);
        } catch (error) {
          setError(error as string)
          console.log(error);
        }
      };

    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Journal entry</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium">
                                Title
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        placeholder="Title"
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="entry" className="block text-sm/6 font-medium">
                                Entry
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="entry"
                                    name="entry"
                                    rows={3}
                                    placeholder="Your journal entry"
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center gap-x-6 justify-between">
                <div className="flex gap-x-6 items-center">
                    <Link href={'/dashboard/spirit'}>
                        <button type="button" className="text-sm/6 font-semibold justify-end">
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Save
                    </button>
                </div>
            </div>

            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </form>
    )
}
