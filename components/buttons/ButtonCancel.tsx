import Link from 'next/link';

export default function ButtonCancel({ path }: any) {

    return (
        <Link href={path}>
            <button type="button" className="text-sm/6 font-semibold text-gray-900 justify-end">
                Cancel
            </button>
        </Link>
    )
}
