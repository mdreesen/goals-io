import Image from "next/image";
import Link from "next/link";

export default async function NavigationPhone() {

    return (
        <nav className="bg-white sm:block md:hidden lg:hidden h-[6rem] fixed bottom-0 w-full z-50">
            <ul className='flex justify-around h-[100%] content-center items-center'>
                <Link href={'/dashboard/body'}>
                    <li>
                        <Image
                            alt="Body icon"
                            width={100}
                            height={100}
                            src={'/assets/icons/body.png'}
                            className="h-[3rem] w-[auto] object-cover scale-75"
                        />
                    </li>
                </Link>
                <Link href={'/dashboard/mind'}>
                    <li>
                        <Image
                            alt="Mind icon"
                            width={100}
                            height={100}
                            src={'/assets/icons/mind.png'}
                            className="h-[3rem] w-[auto] object-cover scale-75"
                        />
                    </li>
                </Link>

                <Link href={'/dashboard'}>
                    <li>
                        <Image
                            alt="Ascend logo back to dashboard"
                            width={100}
                            height={100}
                            src={'/assets/logo_transparent_512x512.png'}
                            className="h-[4rem] w-[auto] object-cover scale-75 bg-gray-900 rounded-full"
                        />
                    </li>
                </Link>

                <Link href={'/dashboard/soul'}>
                    <li>
                        <Image
                            alt="Soul icon"
                            width={100}
                            height={100}
                            src={'/assets/icons/soul.png'}
                            className="h-[3rem] w-[auto] object-cover scale-75"
                        />
                    </li>
                </Link>
                <Link href={'/dashboard/profile'}>
                    <li>
                        <Image
                            alt="Profile icon"
                            width={100}
                            height={100}
                            src={'/assets/icons/profile.png'}
                            className="h-[3rem] w-[auto] object-cover scale-75"
                        />
                    </li>
                </Link>

            </ul>
        </nav>
    )
}