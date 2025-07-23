"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock } from 'lucide-react'; // Icons for email, password, and social logins
import Link from "next/link";
import Image from "next/image";

const cn = (...inputs: string[]) => {
  return inputs.filter(Boolean).join(' ');
};

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
      setLoading(false);
    }
    if (res?.ok) {
      return router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-gray-800 to-gray-950 animate-gradient-shift"></div>

      {/* Subtle Background Particles/Blobs */}
      <div className="absolute inset-0 z-10 opacity-20">
        <motion.div
          initial={{ x: -100, y: -100, scale: 0.5 }}
          animate={{ x: 100, y: 100, scale: 1.2 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear", repeatType: "mirror" }}
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: 100, scale: 0.8 }}
          animate={{ x: -100, y: -100, scale: 1.5 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear", repeatType: "mirror", delay: 5 }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        ></motion.div>
        <motion.div
          initial={{ x: -50, y: 50, scale: 0.7 }}
          animate={{ x: 50, y: -50, scale: 1.1 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear", repeatType: "mirror", delay: 10 }}
          className="absolute top-1/2 left-1/2 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-20 bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700 space-y-8"
      >
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Welcome to

          <div className="flex">
            <div className="flex items-center justify-center h-[70px] text-4xl font-bold text-white w-full">
              ASCΞND
              <div className="absolute">
                <Image
                  alt="White Raven Logo"
                  width={100}
                  height={100}
                  priority
                  src={'/assets/logo_transparent_512x512.png'}
                  className="h-[226px] w-[200px] left-[94px] opacity-60 relative rounded-full object-cover scale-75 lg:hidden md:hidden"
                />
              </div>
            </div>
          </div>

        </h1>
        <p className="text-gray-300 text-center text-lg">
          Log in to continue your journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01, borderColor: '#60A5FA' }}
            className="relative"
          >
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="email"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"                 />
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.01, borderColor: '#60A5FA' }}
            className="relative"
          >
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="password"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </motion.div>

          {/* Forgot Password Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-right text-sm"
          >
            <Link href="/authentication/reset-password" className="text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </motion.div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-400 text-sm text-center"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full py-3 rounded-lg font-semibold text-lg transition-all duration-300",
              loading
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl"
            )}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </motion.button>
        </form>

        {/* OR Divider */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative flex items-center justify-center py-4"
        >
          <div className="absolute w-full border-t border-gray-700"></div>
          <span className="relative z-10 bg-gray-800/80 backdrop-blur-md px-4 text-gray-400 text-sm">OR</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-gray-400 text-center text-sm mt-6"
        >
          Don&apos;t have an account?{' '}
          <Link href="/authentication/signup" className="text-blue-400 hover:underline font-medium">
            Sign Up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  )
}
