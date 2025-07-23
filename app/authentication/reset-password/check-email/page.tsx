'use client'
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";


export default function Page() {

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
                        </div>
                    </div>
                </h1>
                <p className="text-gray-300 text-center text-lg">
                    Thank you for resetting your password.
                    Go ahead and check your email for the link.<br />
                    Check your spam folder if email is not found.<br />
                    <Link href="/authentication/reset-password" className="underline">If link was not sent, click here to try again.</Link>
                </p>

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
                    Have an account?{' '}
                    <Link href="/" className="text-blue-400 hover:underline font-medium">
                        Log In
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
};