"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/actions/resetPassword";
import Link from "next/link";
import LoaderPacman from "@/components/loaders/LoaderPacman";

export default function Page() {
    const router = useRouter();

    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setLoading(true);

            const formData = new FormData(event.currentTarget);
            const res = await resetPassword({
                email: formData.get("email"),
                verify_human: formData.get("verify_human")
            });

            if (res?.error) {
                setError(res.error as string);
                setLoading(false)
            }
            else {
                router.push("/authentication/reset-password/check-email");
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="h-[100vh]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Forgot Password
                    </h2>
                    <p className="mt-10 text-center font-bold leading-9 tracking-tight text-black">If you do not see the link in your email, try again.</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form method="POST" onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="verify_human" className="block text-sm/6 font-medium text-gray-900">
                                Are you a bot? <br />
                                What is 4+3?
                            </label>
                            <div className="mt-2">
                                <input
                                    id="verify_human"
                                    name="verify_human"
                                    required
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            {
                                loading ? <LoaderPacman /> : (
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                                    >
                                        Send
                                    </button>
                                )
                            }
                        </div>
                    </form>

                    <div className="text-red-500">{error}</div>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        <Link href="/authentication/signup" className="font-semibold leading-6 text-gray-900 hover:text-gray-400">
                            Don&apos;t have an account?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};