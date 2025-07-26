'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Bookmark, Lightbulb, CalendarDays, ChevronRight } from 'lucide-react'; // Icons for notes, status

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
  return inputs.filter(Boolean).join(' ');
};

// Sample Data for the list of Bible notes (replace with real data from your app)
const sampleBibleNotes = [
  {
    id: 'bn1',
    title: 'Faith in Action',
    book: 'James',
    chapter: 2,
    verse: '14-26',
    date: 'Today',
    status: 'studied', // 'read', 'studied', 'favorite', 'draft'
    icon: <Lightbulb size={20} className="text-yellow-400" />,
    color: 'from-yellow-600 to-yellow-700',
  },
  {
    id: 'bn2',
    title: 'The Good Shepherd',
    book: 'Psalm',
    chapter: 23,
    verse: '1-6',
    date: 'Yesterday',
    status: 'favorite',
    icon: <Bookmark size={20} className="text-pink-400" />,
    color: 'from-pink-600 to-pink-700',
  },
  {
    id: 'bn3',
    title: 'Love is Patient',
    book: '1 Corinthians',
    chapter: 13,
    verse: '4-7',
    date: '2024-07-22',
    status: 'read',
    icon: <Book size={20} className="text-blue-400" />,
    color: 'from-blue-600 to-blue-700',
  },
  {
    id: 'bn4',
    title: 'Armor of God',
    book: 'Ephesians',
    chapter: 6,
    verse: '10-18',
    date: '2024-07-20',
    status: 'studied',
    icon: <Lightbulb size={20} className="text-green-400" />,
    color: 'from-green-600 to-green-700',
  },
  {
    id: 'bn5',
    title: 'Creation Story',
    book: 'Genesis',
    chapter: 1,
    verse: '1-31',
    date: '2024-07-18',
    status: 'draft',
    icon: <CalendarDays size={20} className="text-gray-400" />,
    color: 'from-gray-600 to-gray-700',
  },
];

export default function BibleNotesList() {
  // Animation variants for individual list items
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-white font-inter p-4 md:p-8">
      <div className="max-w-3xl mx-auto py-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Your Bible Notes
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <AnimatePresence>
            {sampleBibleNotes.map((note, index) => (
              <motion.div
                key={note.id}
                variants={itemVariants}
                custom={index} // For staggered animation
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ delay: index * 0.1 }} // Staggered entry
              >
                <Card
                  className={cn(
                    "bg-gray-800/70 backdrop-blur-lg border border-gray-700 text-white overflow-hidden",
                    "transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out",
                    "cursor-pointer" // Indicate clickable
                  )}
                >
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {/* Icon with background circle */}
                      <div className={cn(
                        "p-3 rounded-full",
                        note.status === 'studied' && 'bg-yellow-500/20',
                        note.status === 'favorite' && 'bg-pink-500/20',
                        note.status === 'read' && 'bg-blue-500/20',
                        note.status === 'draft' && 'bg-gray-500/20',
                      )}>
                        {note.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-gray-100">{note.title}</CardTitle>
                        <CardDescription className="text-gray-400 text-sm mt-1">
                          {note.book} {note.chapter}:{note.verse}
                        </CardDescription>
                        <p className={cn(
                          "text-xs font-medium mt-2",
                          note.status === 'studied' && 'text-yellow-300',
                          note.status === 'favorite' && 'text-pink-300',
                          note.status === 'read' && 'text-blue-300',
                          note.status === 'draft' && 'text-gray-300',
                        )}>
                          Status: {note.status.charAt(0).toUpperCase() + note.status.slice(1)} | Date: {note.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-gray-400 hover:text-blue-400">
                      <ChevronRight size={24} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Optional: Add New Note Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: sampleBibleNotes.length * 0.1 + 0.2 }} // Delay after list items
          className="text-center mt-12"
        >
          <Button className="px-8 py-4 rounded-full font-bold text-lg
                     bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg hover:shadow-xl
                     transform hover:scale-105 transition-all duration-300 ease-out">
            Add New Note
          </Button>
        </motion.div>
      </div>
    </div>
  );
};