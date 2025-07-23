'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function Welcome({ user }: any) {
    const userName = `${user.first_name ? user.first_name : 'Ascender'}`;
    const userDescription = `${user.description ? user.description : "Here's a quick overview of your progress. Keep ascending!"}`

    return (
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left mb-12"
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
                Welcome back, {userName}!
            </h1>
            <p className="text-xl">
                {userDescription}
            </p>
        </motion.div>
    );
};