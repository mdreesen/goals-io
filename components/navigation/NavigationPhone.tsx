'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Using Lucide React for icons
import { current_year } from '@/lib/date_time';
import Link from 'next/link';

export default function NavigationPhone({ settings }: any) {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants for the menu overlay
    const menuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.4, ease: "easeInOut" } },
    };

    // Animation variants for individual menu items (staggered)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const staggerContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger delay for children
                delayChildren: 0.3, // Delay before children start animating
            },
        },
    };

    const navItems = [
        { name: 'Main', href: '/dashboard', showNav: true },
        { name: 'Body', href: '/dashboard/body', showNav: settings?.useShowBody },
        { name: 'Mind', href: '/dashboard/mind', showNav: settings?.useShowMind },
        { name: 'Spirit', href: '/dashboard/spirit', showNav: settings?.useShowSpirit },
        { name: 'Profile', href: '/dashboard/profile', showNav: true },
    ];

    return (
        <nav className="relative bg-transparent p-4 md:hidden">
            <div className="flex justify-between items-center">
                {/* Logo/Brand Name */}
                <Link href={'/dashboard'}>
                    <div className="flex items-center h-[40px] text-2xl font-bold">
                        ASCΞND
                        <Image
                            alt="White Raven Logo"
                            width={100}
                            height={100}
                            priority
                            src={'/assets/logo_transparent_512x512.png'}
                            className="h-[226px] w-[200px] opacity-60 left-[-113px] relative rounded-full object-cover scale-75 lg:hidden md:hidden"
                        />
                    </div>
                </Link>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 z-50 relative"
                    aria-label="Toggle navigation menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="x-icon"
                                initial={{ rotate: 0, opacity: 0 }}
                                animate={{ rotate: 90, opacity: 1 }}
                                exit={{ rotate: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={28} className={`text-white`} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu-icon"
                                initial={{ rotate: 0, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={28} className={`${settings.useDarkMode ? 'text-white' : 'text-black' }`}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 bg-gray-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        <motion.ul
                            variants={staggerContainerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center space-y-6"
                        >
                            {navItems.map((item) => item?.showNav && (
                                <motion.li key={item.name} variants={itemVariants}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)} // Close menu on item click
                                        className="text-4xl font-extrabold text-gray-300 hover:text-[#60a5fa] transition-colors duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-indigo-900 to-indigo-900 transition-all duration-300 group-hover:w-full rounded-full"></span>
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Optional: Social Media Icons or other elements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute bottom-10 text-gray-500 text-sm"
                        >
                            &copy; {current_year()} White Raven Development. All rights reserved.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};