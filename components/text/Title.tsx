import { fetchSettings } from "@/actions/settings";

export default async function Title({ text }: any) {
    const useSettings = await fetchSettings();

    const useDarkMode = useSettings.useDarkMode;

    return <h2 className={`${useDarkMode ? 'dark' : 'light'} mt-2 text-pretty text-4xl text-center font-semibold tracking-tight sm:text-5xl mb-6`}>{text}</h2>
}
