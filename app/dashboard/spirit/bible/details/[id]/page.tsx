import { fetchBibleById } from "@/actions/bible";
import ButtonBack from "@/components/buttons/ButtonBack";

export default async function Page({ params }: any) {

    const { id } = await params;
    const details = await fetchBibleById({ id });

    const formatDetails = details.notes;

    return (
        <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base/7 font-semibold text-gray-900">Bible notes</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="book_title" className="block text-sm/6 font-medium text-gray-900">
                            Book of the Bible
                        </label>
                        <div className="flex items-center">
                            {details.book_title}
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="chapter" className="block text-sm/6 font-medium text-gray-900">
                            Chapter
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center">
                                {details.chapter}
                            </div>
                        </div>
                    </div>

                    <div className="sm:col-span-4">
                        <label htmlFor="verses" className="block text-sm/6 font-medium text-gray-900">
                            Verse(s)
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center">
                                {details.verses}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full">
                        <label htmlFor="notes" className="block text-sm/6 font-medium text-gray-900">
                            Notes
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="notes"
                                name="notes"
                                rows={20}
                                readOnly={true}
                                className="block h-full resize-none w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 sm:text-sm/6"
                                value={formatDetails}
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
