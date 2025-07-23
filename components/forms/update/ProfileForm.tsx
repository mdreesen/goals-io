'use client';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { editProfile } from "@/actions/profile";
import { convertTimezone, convertTimezoneReverse } from '@/lib/formatters';
import ButtonCancel from "@/components/buttons/ButtonCancel";

export default function ProfileForm({ data }: any) {

    const router = useRouter();
    const ref = useRef(null);

    const [error, setError] = useState<string>();
    const useTimeZone = convertTimezoneReverse(data?.time_zone)

    const handleSubmit = async (formData: FormData) => {

        try {
            await editProfile({
                _id: data?._id,
                username: formData.get("username"),
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                email: formData.get("email"),
                country: formData.get("country"),
                time_zone: `America/${convertTimezone(formData.get("time_zone"))}`,
                street_address: formData.get("street_address"),
                city: formData.get("city"),
                region: formData.get("region"),
                postal_code: formData.get("postal_code"),
            });

            router.refresh
            router.push(`/dashboard/profile`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    return (
        <form ref={ref} action={handleSubmit}>
            <div className="space-y-12 px-[2rem]">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Profile</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm/6 font-medium">
                                Who are you called to be?
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Leader, Hard Worker, etc..."
                                        defaultValue={data?.username ?? ''}
                                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base focus:outline focus:outline-0 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base/7 font-semibold">Personal Information</h2>
                    <p className="mt-1 text-sm/6">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm/6 font-medium">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    autoComplete="given-name"
                                    defaultValue={data?.first_name ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm/6 font-medium">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    autoComplete="family-name"
                                    defaultValue={data?.last_name ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm/6 font-medium">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    defaultValue={data?.email ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm/6 font-medium">
                                Country
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    defaultValue={data?.country ?? ''}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                >
                                    <option>United States</option>
                                    <option>Canada</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="time_zone" className="block text-sm/6 font-medium">
                                Time Zone
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="time_zone"
                                    name="time_zone"
                                    autoComplete="time_zone-name"
                                    defaultValue={useTimeZone ?? ''}
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-8 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                >
                                    <option>EST</option>
                                    <option>CST</option>
                                    <option>MST</option>
                                    <option>PST</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end sm:size-4"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street_address" className="block text-sm/6 font-medium">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street_address"
                                    name="street_address"
                                    type="text"
                                    autoComplete="street-address"
                                    defaultValue={data?.street_address ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm/6 font-medium">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    defaultValue={data?.city ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm/6 font-medium">
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    defaultValue={data?.region ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal_code" className="block text-sm/6 font-medium">
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal_code"
                                    name="postal_code"
                                    type="text"
                                    autoComplete="postal-code"
                                    defaultValue={data?.postal_code ?? ''}
                                    className="block w-full rounded-md px-3 py-1.5 text-base outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <ButtonCancel path={`/dashboard/profile`} />
                <button
                    type="submit"
                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Save
                </button>
            </div>
            {error && <span className='block text-sm/6 font-medium text-red-500'>{error}</span>}
        </form>
    )
}
