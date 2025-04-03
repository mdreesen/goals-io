import { fetchUser } from '@/actions/user';
import { parse } from '@/lib/formatters';
import { current_year, timezone } from "@/lib/date_time";
import { fetchSettings } from '@/actions/settings';
import Navigation from "@/components/navigation/Navigation";
import NavigationPhone from '@/components/navigation/NavigationPhone';
import Banner_Utc_Time from '@/components/banners/Banner_Utc_Time';
import Tutorial from '@/components/modals/Tutorial';
import packagejson from '@/package.json';
import { Metadata } from 'next';

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

    const user = {
        name: useUser?.username ? useUser?.username : '',
    };

    // Conditionals
    const hasUserFirstLast = useUser?.first_name && useUser?.last_name ? `${useUser?.first_name} ${useUser?.last_name}` : '';

    // UTC device banner component
    const hasUtcTime = useTimezone.includes('UTC') && (
        <div className='h-[4rem]'>
            <Banner_Utc_Time />
        </div>
    );

    // Tutorial component
    const useTutorial = !useUser?.tutorial_read && (
        <Tutorial data={parse(useUser)} />
    );

    return (
        <div className="flex flex-col min-h-screen">

            {/* Banner shown if device has UTC time */}
            {hasUtcTime}

            <div className="bg-gray-900 pb-32">
                <Navigation />
                <NavigationPhone settings={parse(useSettings)} />
                <header className="py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-white">{hasUserFirstLast}</h1>
                        <p className="text-xl font-bold tracking-tight text-white">{user.name}</p>
                    </div>
                </header>
            </div>

            <main className="-mt-32 grow">
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6 ">
                        {/* Tutorial shown if user has not seen/read it */}
                        {useTutorial}
                        {children}
                    </div>
                </div>
            </main>
            <footer className="bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 py-12 mb-14 md:mb-0 lg:mb-0 md:flex md:items-center md:justify-between lg:px-8">
                    <div className="flex justify-center gap-x-6 md:order-2">
                        <span className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">Version {packagejson.version}</span>
                    </div>
                    <p className="mt-8 text-sm/6 text-gray-400 md:order-1 md:mt-0 flex flex-col">
                        <a href="/dashboard/privacy-policy">Privacy Policy</a>
                        &copy; {current_year()} White Raven Development. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}