'use client';

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { readTutorial } from '@/actions/settings';
import LoadingScale from '../loaders/LoadingScale';

export default function Tutorial({ data }: any) {
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleToggle = async () => {
        setLoading(true)

        try {
            await readTutorial({
                _id: data?._id,
                tutorial_read: true,
            });

        } catch (error) {
            console.error(error);
            setLoading(false)
        }
    };

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10 items-center">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full justify-center items-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div>
                            <div className="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" className="font-bold text-gray-900 text-xl">
                                    Welcome to Ascend!
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-gray-500 text-lg">
                                        There are a few things to note before starting
                                    </p>
                                </div>

                                <div className='h-[40vh] overflow-scroll'>
                                    <div className="mt-4">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Water intake
                                        </DialogTitle>
                                        <p className="text-sm text-gray-500">
                                            This feature is seen in the body section of the application. You will either input your weight to track how many ounces you need or you can use the default setting of 105 oz. per day.
                                            A good rule of thumb for water intake is your weight divided by 2, this number is your water intake per day in ounces.
                                            On your inital dashboard, a graph is shown with the recorded water intake per day so that you can see where you track!
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Weight
                                        </DialogTitle>
                                        <p className="text-sm text-gray-500">
                                            As you are getting into the consistency of your routine, you should be tracking your weight every day. As you track your weight, your water goal will adjust for you.
                                            A good rule of thumb is to weigh yourself in the morning, as this brings consistancy to your routine and body weight measurement.
                                            On your initial dashboard, a graph is shown with the recorded weight per day so that you can see where you track!
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Settings
                                        </DialogTitle>
                                        <p className="text-sm text-gray-500">
                                            On your profile page, you are able to enable/disable features to customize what you need or want to see. If there is a season where you are not doing affermations, you can switch it off and carry on. You are always able to turn it back on when you are ready to use it.
                                            When switching off features, your navigation bar will change to declutter things.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        {
                                            loading ? (
                                                <LoadingScale />
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={handleToggle}
                                                    className="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 sm:col-start-2"
                                                >
                                                    I have read
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
