'use client';
import React from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Book } from 'lucide-react';
import { bibleBookIcons } from '@/lib/icons/bibleBookIcons';
import { itemVariants } from "@/lib/variants";

// shadcn/ui components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';

// Utility function for Tailwind CSS class concatenation
const cn = (...inputs: (string | boolean)[]) => {
  return inputs.filter(Boolean).join(' ');
};

export default function BibleList({ list }: any) {

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-6"
    >
      <AnimatePresence>
        {list.map((note: any, index: number) => (
          <motion.div
            key={note._id}
            variants={itemVariants}
            custom={index} // For staggered animation
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ delay: index * 0.1 }} // Staggered entry
          >
            <Card
              className={cn(
                "bg-gray-800 backdrop-blur-lg border border-gray-700 text-white overflow-hidden",
                "transform hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out",
                "cursor-pointer" // Indicate clickable
              )}
            >
              <Link className="w-full" href={`/dashboard/spirit/bible/edit/${note._id}`}>

                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Icon with background circle */}
                    <div className={cn(
                      "p-3 rounded-full",
                      note.status === 'studied' && 'bg-yellow-500/20',
                      note.status === 'favorite' && 'bg-pink-500/20',
                      note.type === 'Devotional note' && 'bg-blue-500/20',
                      note.type === 'Sermon note' && 'bg-gray-500/20',
                    )}>
                      {bibleBookIcons[note.book_title] || <Book />}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-100">{note.book_title}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm mt-1">
                        {note.chapter && <span>Chapter: {note.chapter}</span>}<br/>
                        {note.verses && <span>Verse: {note.verses}</span>}
                      </CardDescription>
                      <p className={cn(
                        "text-xs font-medium mt-2",
                      )}>
                        {/* Status: {note.status.charAt(0).toUpperCase() + note.status.slice(1)} | Date: {note.date} */}
                        {note?.date && `Date: ${note?.date}`}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" className="text-gray-400 hover:text-blue-400">
                    <ChevronRight size={24} />
                  </Button>
                </CardContent>
              </Link>

            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};