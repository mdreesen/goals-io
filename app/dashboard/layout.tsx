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

    // UTC device banner component
    const hasUtcTime = useTimezone.includes('UTC') && (<div className='h-[4rem]'><Banner_Utc_Time /></div>);

    // Tutorial component
    const useTutorial = !useUser?.tutorial_read && <Tutorial data={parse(useUser)} />;

    // Dark Mode
    const useDarkMode = useSettings.useDarkMode;

    return (
        <div className={`flex flex-col min-h-screen py-4 ${useDarkMode ? 'bg-gradient-to-br from-gray-950 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-200 to-gray-100 text-gray-900'}`}>

            {/* Banner shown if device has UTC time */}
            {hasUtcTime}

            <div>
                <Navigation />
                <NavigationPhone settings={parse(useSettings)} />
                {useTutorial}
                {children}
            </div>
        </div>
    )
}