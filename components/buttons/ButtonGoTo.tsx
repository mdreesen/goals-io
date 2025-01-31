import Link from 'next/link';

export default async function ButtonGoTo({ path, title }: any) {

    return (
        <Link href={path}>
            <button
                type="button"
                className="block rounded-md bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {title}
            </button>
        </Link>
    )
}
