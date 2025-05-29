import Image from "next/image";
import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';
import { timezone } from "@/lib/date_time";
import { fetchSettings } from '@/actions/settings';
import Navigation from "@/components/navigation/Navigation";
import NavigationPhone from '@/components/navigation/NavigationPhone';
import Banner_Utc_Time from '@/components/banners/Banner_Utc_Time';
import Tutorial from '@/components/modals/Tutorial';
import { Metadata } from 'next';
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: '%s | Dashboard',
        default: 'Dashboard',
    },
    description: "Set Habits. Achieve greatness.",
    metadataBase: new URL('https://www.ascendpod.com'),
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const useUser = await fetchUser();
    const useTimezone = await timezone();
    const useSettings = await fetchSettings();

    if (!useUser._id) redirect('/');

    // Conditionals
    const hasUserFirstLast = useUser?.first_name || useUser?.last_name ? `${useUser?.first_name} ${useUser?.last_name}` : '';

    // UTC device banner component
    const hasUtcTime = useTimezone.includes('UTC') && (<div className='h-[4rem]'><Banner_Utc_Time /></div>);

    // Tutorial component
    const useTutorial = !useUser?.tutorial_read && <Tutorial data={parse(useUser)} />;

    // Dark Mode
    const useDarkMode = useSettings.useDarkMode;

    return (
        <div className={`flex flex-col min-h-screen`}>

            {/* Banner shown if device has UTC time */}
            {hasUtcTime}

            <div className={`${useDarkMode ? 'dark' : 'light bg-gray-900'} pb-32`}>
                <Navigation />
                <NavigationPhone settings={parse(useSettings)} />

                <header className={`py-10`}>
                    <div className="mx-auto max-w-7xl px-4">
                        <h1 className="text-3xl font-bold tracking-tight text-white flex items-center h-[3rem]">
                            {hasUserFirstLast}
                            <Image
                                alt="White Raven Logo"
                                width={100}
                                height={100}
                                priority
                                src={'/assets/logo_transparent_512x512.png'}
                                className="h-[8rem] w-16 rounded-full object-cover scale-75 lg:hidden md:hidden"
                            />
                        </h1>
                        <p className="text-xl font-bold tracking-tight text-white">{useUser?.username && useUser.username}</p>
                    </div>
                </header>
            </div>

            <main className={`-mt-32 grow`}>
                <div className="mx-auto max-w-7xl pb-[95px]">
                    <div className={`${useDarkMode ? 'dark' : 'light'} rounded-t-lg bg-white px-5 sm:px-6 pt-[2rem] pb-[2rem]`}>
                        {/* Tutorial shown if user has not seen/read it */}
                        {useTutorial}
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}