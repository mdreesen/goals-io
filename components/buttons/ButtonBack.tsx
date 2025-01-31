import Link from 'next/link';

export default async function ButtonBack({ path }: any) {

    return (
        <div className="px-4 sm:px-2 lg:px-4">
            <div className="flex gap-x-6 items-center">
                <Link href={path}>
                    <button type="button" className="text-sm/6 font-semibold text-gray-900 justify-end">
                        ← Back
                    </button>
                </Link>
            </div>
        </div>
    )
}
