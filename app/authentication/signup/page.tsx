"use client";
import { useActionState } from "react";
import Link from "next/link";
import Image from "next/image";
import { register } from "@/actions/register";
import LoadingScale from "@/components/loaders/LoadingScale";

export default function Page() {

  const [state, action, isPending] = useActionState(register, undefined);

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
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 sm:rounded-lg sm:px-12">
          <form method="POST" action={action} className="space-y-6">
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
                  defaultValue={state?.email}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
              {state?.errors.email && <div className="text-red-500">{state?.errors.email}</div>}
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
                  defaultValue={state?.password}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>
              {/* {state?.errors.password && <div className="text-red-500">Password must:</div>} */}
              {state?.errors.password && state?.errors.password.map((item: any, index: number) => (<div key={`${index}-${item}`} className="text-red-500">- {item}</div>))}
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
                  defaultValue={state?.confirm_password}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-900/10 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-900 sm:text-sm/6"
                />
              </div>

              {state?.errors.confirm_password && <div className="text-red-500">{state?.errors.confirm_password}</div>}
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

              {state?.errors.verify_human && <div className="text-red-500">{state?.errors.verify_human}</div>}
            </div>

            <div className="flex h-6 items-center">
              <input
                id="privacy_policy"
                name="privacy_policy"
                required
                type="checkbox"
                aria-describedby="privacy-policy"
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <label htmlFor="privacy_policy" className="text-sm font-medium leading-6 text-black px-2 flex gap-1">
                Agree to
                <Link href="/privacy-policy" className="leading-6 block text-sm/6 font-medium text-gray-900 hover:text-gray-400 underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isPending}
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                {isPending ? <LoadingScale color={"#ffffff"} /> : 'Sign up'}
              </button>
            </div>
          </form>
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
