import { PropagateLoader } from 'react-spinners';

export default function LoaderPropagate() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div>
            <PropagateLoader size={15} />
        </div>
    )

}