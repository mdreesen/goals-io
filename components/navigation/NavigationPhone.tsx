'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationPhone() {
    const pathName = usePathname();

    const links = [
        {
            id: 1,
            href: "/dashboard/body",
            alt: "Body icon",
            assetSrc: '/assets/icons/body.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75'
        },
        {
            id: 2,
            href: "/dashboard/mind",
            alt: "Mind icon",
            assetSrc: '/assets/icons/mind.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75'
        },
        {
            id: 3,
            href: "/dashboard",
            alt: "Ascend logo back to dashboard",
            assetSrc: '/assets/logo_transparent_512x512.png',
            style: 'h-[4rem] w-[auto] object-cover scale-75 bg-gray-900 rounded-full'
        },
        {
            id: 4,
            href: "/dashboard/spirit",
            alt: "Soul icon",
            assetSrc: '/assets/icons/soul.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75'
        },
        {
            id: 5,
            href: "/dashboard/profile",
            alt: "Profile icon",
            assetSrc: '/assets/icons/profile.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75'
        },
    ]

    return (
        <nav className="bg-white sm:block md:hidden lg:hidden h-[6rem] fixed bottom-0 w-full z-50">
            <ul className='flex justify-around h-[100%] content-center items-center'>
                {links.map((item) => (
                    <Link href={item.href} key={item.id}>
                        <li>
                            <Image
                                alt={item.alt}
                                width={100}
                                height={100}
                                src={item.assetSrc}
                                className={`${item.style}`}
                            />

                            <div className={`${pathName === item.href && 'border-b-2 border-indigo-900'}`}/>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}