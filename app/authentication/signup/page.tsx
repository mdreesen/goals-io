"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { register } from "@/actions/register";
import LoaderPacman from "@/components/loaders/LoaderPacman";

export default function Page() {
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    const r = await register({
      email: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
    });
    ref.current?.reset();
    if (r?.error) {
      setError(r.error);
      setLoading(false)
      return;
    }
    else {
      return router.push("/");
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
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
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

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-gray-900 checked:bg-gray-900 indeterminate:border-gray-900 indeterminate:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />
                    <svg
                      fill="none"
                      viewBox="0 0 14 14"
                      className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:checked]:opacity-100"
                      />
                      <path
                        d="M3 7H11"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-has-[:indeterminate]:opacity-100"
                      />
                    </svg>
                  </div>
                </div>
                <label htmlFor="remember-me" className="block text-sm/6 text-gray-900">
                  Remember me
                </label>
              </div>

              {/* <div className="text-sm/6">
                <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
                  Forgot password?
                </a>
              </div> */}
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
