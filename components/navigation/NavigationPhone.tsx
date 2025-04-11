'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationPhone({ settings }: any) {
    const pathName = usePathname();

    const links = [
        {
            id: 1,
            href: "/dashboard/body",
            alt: "Body icon",
            assetSrc: '/assets/icons/mobile_nav/body.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75',
            useNav: settings?.useShowBody
        },
        {
            id: 2,
            href: "/dashboard/mind",
            alt: "Mind icon",
            assetSrc: '/assets/icons/mobile_nav/mind.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75',
            useNav: settings?.useShowMind
        },
        {
            id: 3,
            href: "/dashboard",
            alt: "Ascend logo back to dashboard",
            assetSrc: '/assets/icons/mobile_nav/logo_transparent_512x512.png',
            style: 'h-[4rem] w-[auto] object-cover scale-75 bg-gray-900 rounded-full',
            useNav: true
        },
        {
            id: 4,
            href: "/dashboard/spirit",
            alt: "Soul icon",
            assetSrc: '/assets/icons/mobile_nav/soul.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75',
            useNav: settings?.useShowSpirit
        },
        {
            id: 5,
            href: "/dashboard/profile",
            alt: "Profile icon",
            assetSrc: '/assets/icons/mobile_nav/profile.png',
            style: 'h-[3rem] w-[auto] object-cover scale-75',
            useNav: true
        },
    ]

    return (
        <nav className="backdrop-blur-[8px] bg-gradient-to-b from-white/10 to-white/90 sm:block md:hidden lg:hidden h-[6rem] fixed bottom-0 w-full z-50">
            <ul className='flex justify-around h-[100%] content-center items-center'>
                {links.map((item) => item?.useNav && (
                    <Link href={item.href} key={item.id}>
                        <li>
                            <Image
                                alt={item.alt}
                                width={100}
                                height={100}
                                src={item.assetSrc}
                                className={`${item.style}`}
                            />

                            <div className={`${pathName === item.href && 'border-b-2 border-indigo-900'}`} />
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    )
}