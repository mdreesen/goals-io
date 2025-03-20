"use client";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { register } from "@/actions/register";
import { signIn } from "next-auth/react";
import LoaderPacman from "@/components/loaders/LoaderPacman";

export default function Page() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {

    setLoading(true);

    // Set to register the user
    const r = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
      verify_human: formData.get("verify_human")
    });

    // If error shows, then show what happened
    if (r?.error) {
      setError(r.error as string);
      setLoading(false)
    }
    // If everything passes, lets log them in
    else {
      await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });

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
        <h2 className="mt-6 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
          Welcome to Ascend
        </h2>
        <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
          <form method="POST" ref={ref} action={handleSubmit} className="space-y-6">
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm_password" className="block text-sm/6 font-medium text-gray-900">
                Confirm password
              </label>
              <div className="mt-2">
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  required
                  autoComplete="password-confirm_password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="verify_human" className="block text-sm/6 font-medium text-gray-900">
                What is 3+2?
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
                    Sign up
                  </button>
                )
              }
            </div>
          </form>

          <div className="text-red-500">{error}</div>

          <div>

            <p className="mt-10 text-center text-sm text-gray-900">
              <Link href="/" className="leading-6 block text-sm/6 font-medium text-gray-900">
                Already have an account?
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
