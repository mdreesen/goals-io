"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ButtonAuth() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-400 hover:text-white"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });

          }}
        >
          Sign Out
        </button>
      )
    } else if (status === "loading") {
      return (
       'Loading...'
      )
    } else {
      return (
        <Link
          href="/dashboard"
          className="rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 hover:text-white"
        >
          Sign In
        </Link>
      )
    }
  }
  return showSession();
}