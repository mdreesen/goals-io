'use client'
import { PacmanLoader } from 'react-spinners';

export default function LoaderPacman() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
            <PacmanLoader size={15} />
            <p>Please wait...</p>
        </div>
    )

}