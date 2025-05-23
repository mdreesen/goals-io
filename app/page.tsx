"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LoadingScale from "@/components/loaders/LoadingScale";

export default function Page() {

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
      setLoading(false)
    }
    if (res?.ok) {
      return router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="White Raven Logo"
          src="/assets/logo.png"
          className="mx-auto h-12 w-auto rounded-full object-cover scale-75"
          height={200}
          width={200}
        />
        <h2 className="mt-6 text-center text-3xl/9 font-bold tracking-tight">
          Welcome to Ascend
        </h2>
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
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
            </div>

            <div className="flex items-center justify-between">

              <div className="text-sm/6">
                <Link href="/authentication/reset-password" className="font-semibold text-gray-900 hover:text-gray-400">
                  Forgot password?
                </Link>
              </div>

              <div className="text-sm/6">
                <Link href="/privacy-policy" className="leading-6 block text-sm/6 font-medium text-gray-900 hover:text-gray-400">
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div className="flex justify-center">

              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-gray-900 hover:bg-gray-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                {loading ? <LoadingScale color={"#ffffff"} /> : 'Sign In'}
              </button>
            </div>
          </form>

          <div className="text-red-500">{error}</div>

          <div className="flex justify-center">
            <p className="mt-10 text-center text-sm text-gray-900">
              <Link href="/authentication/signup" className="leading-6 block text-sm/6 font-medium text-gray-900 hover:text-gray-400">
                Do not have an account?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
