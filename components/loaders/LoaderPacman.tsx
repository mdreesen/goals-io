// 'use client'
import { PacmanLoader } from 'react-spinners';

export default function LoaderPacman() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
            <PacmanLoader />
            <p>Please wait...</p>
        </div>
    )

}