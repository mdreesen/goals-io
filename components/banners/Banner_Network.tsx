export default function Banner_Network() {
    return (
        <>
            {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
                <div className="pointer-events-auto flex items-center justify-between gap-x-6 bg-gray-900 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
                    <p className="text-sm/6 text-white">
                        <a href="#">
                            <strong className="font-semibold">No network</strong>
                            <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                                <circle r={1} cx={1} cy={1} />
                            </svg>
                            You are currently offline, please reconnect to a network.
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
