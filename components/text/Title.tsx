import { fetchSettings } from "@/actions/settings";

export default async function Title({ text, fontSize='4xl' }: any) {
    const useSettings = await fetchSettings();

    const useDarkMode = useSettings.useDarkMode;

    <h2 className="text-4xl font-extrabold text-center mb-10
    bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
Your Weight Journey
</h2>

    return <h2 className={`text-${fontSize} font-extrabold text-center mb-10
    bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500`}>{text}</h2>
}
