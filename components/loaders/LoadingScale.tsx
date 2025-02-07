'use client';
import { ScaleLoader } from 'react-spinners';

export default function LoadingScale({ height, width }: any) {
    // You can add any UI inside Loading, including a Skeleton.

    // Height default = 35
    // Width default = 4
    return (
        <div className={'flex justify-center'}>
            <ScaleLoader speedMultiplier={1} height={height} width={width} loading={true} />
        </div>
    )
}