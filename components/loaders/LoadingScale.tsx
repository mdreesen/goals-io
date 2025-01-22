'use client'
import { ScaleLoader } from 'react-spinners';

export default function LoadingScale() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='flex justify-center'>
            <ScaleLoader speedMultiplier={1} loading={true} />
        </div>
    )
}