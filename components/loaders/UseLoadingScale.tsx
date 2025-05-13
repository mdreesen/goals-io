import { colorModes } from '@/lib/colors';
import LoadingScale from './LoadingScale';

export default async function UseLoadingScale({ height, width, color="#000000" }: any) {

    const useColors = await colorModes(color);

    return (
        <div className={'flex justify-center'}>
            <LoadingScale color={useColors} speedMultiplier={1} height={height} width={width} loading={true} />
        </div>
    )
}