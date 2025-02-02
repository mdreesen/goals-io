import { fetchUser } from '@/actions/user';
import Navigation from "@/components/navigation/Navigation";
import NavigationPhone from '@/components/navigation/NavigationPhone';
import { current_year } from "@/lib/date_time";
import packagejson from '@/package.json';
import Banner_Utc_Time from '@/components/banners/Banner_Utc_Time';

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const useUser = await fetchUser();

    const user = {
        name: useUser?.username ? useUser?.username : useUser?.email,
    };

    // Conditionals
    const hasUserFirstLast = useUser?.first_name && useUser?.last_name ? `${useUser?.first_name} ${useUser?.last_name}` : 'Dashboard';

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gray-900 pb-32">
                <Navigation />
                <NavigationPhone/>
                <header className="py-10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-white">{hasUserFirstLast}</h1>
                        <p className="text-xl font-bold tracking-tight text-white">{user.name}</p>
                    </div>
                </header>
            </div>

            <main className="-mt-32 grow">
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
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
                        &copy; {current_year()} White Raven, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}