"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { updateUserPassword } from "@/actions/user";
import { useParams } from 'next/navigation';
import Link from "next/link";

export default function Page() {
    const params = useParams();
    const { token } = params;

    const [error, setError] = useState("");
    const router = useRouter();

    // const id = params.token;

    const handleSubmit = async (formData: FormData) => {
        try {
            const r = await updateUserPassword({
                token: token,
                password: formData.get("password"),
                confirm_password: formData.get("confirm_password"),
            });

            router.refresh
            router.push(`/`);
        } catch (error) {
            setError(error as string)
            console.log(error);
        }
    };

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Create a new password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" action={handleSubmit} className="space-y-6">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-black">
                                    New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-black">
                                    Confirm New Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                            >
                                Submit
                            </button>

                            {error && <div className="">{error}</div>}
                        </div>
                    </form>


                    <p className="mt-10 text-center text-sm text-gray-400">
                        <Link href="/" className="font-semibold leading-6 text-gray-900 hover:text-gray-400">
                            Already have an account?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};