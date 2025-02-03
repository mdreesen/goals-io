export default function Results({ data }: any) {

    const useControlledResults = () => {
        const dataToNumber = Number(data);

        switch (true) {
            case dataToNumber === 1:
                return (
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> result
                    </p>
                );
                break

            case dataToNumber >= 2 && dataToNumber <= 10:
                return (
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">{data}</span> results
                    </p>
                );
                break

            case dataToNumber > 10:
                return (
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">{data}</span> results
                    </p>
                );
                break

            default:
                return (
                    <p className="text-sm text-gray-700" />
                )
        }
    }


    return (
        <div>
            {useControlledResults()}
        </div>
    )
}
