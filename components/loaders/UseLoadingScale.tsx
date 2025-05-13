import LoadingScale from "@/components/loaders/LoadingScale";
import { fetchSettings } from "@/actions/settings";

export default async function UseLoadingScale({ height, width, color="#000000" }: any) {

    const useSettings = await fetchSettings() ?? [];
    const { useDarkMode } = useSettings;

    const useColorMode = async() => {
        switch (true) {
            case useDarkMode:
                return '#ffffff';
                break
            case color !== '#000000':
                return  color;
                break
            default:
                return '#000000';
        }
    }

    return (
        <div className={'flex justify-center'}>
            <LoadingScale color={useColorMode()} speedMultiplier={1} height={height} width={width} loading={true} />
        </div>
    )
}