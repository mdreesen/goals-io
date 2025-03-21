import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ButtonBack from "@/components/buttons/ButtonBack";
import { fetchEntryById } from "@/actions/journal";

export default async function JournalForm({ params }: any) {

    const { id } = await params;
    const details = await fetchEntryById({ id });

    return (
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Journal entry</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-gray-900">
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        placeholder="Title"
                                        defaultValue={details?.title ?? ''}
                                        readOnly={true}
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="entry" className="block text-sm/6 font-medium text-gray-900">
                                Entry
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="entry"
                                    name="entry"
                                    rows={3}
                                    placeholder="Your journal entry"
                                    defaultValue={details?.entry ?? ''}
                                    readOnly={true}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-x-6 justify-between">
                <ButtonBack path='/dashboard/spirit' />
            </div>
            </div>
    )
}
