import { fetchSettings } from "@/actions/settings";

export default async function Title({ text, fontSize='4xl' }: any) {
    const useSettings = await fetchSettings();

    const useDarkMode = useSettings.useDarkMode;

    return <h2 className={`${useDarkMode ? 'dark' : 'light'} mt-2 text-pretty text-${fontSize} text-center font-semibold tracking-tight sm:text-${fontSize} mb-6`}>{text}</h2>
}
