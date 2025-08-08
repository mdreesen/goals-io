import React from 'react';
import { ScrollText, Swords, Star, Sun, PenTool, Lightbulb, Shield, Anchor, Heart, Crown, BookOpen, Church, Telescope, ThumbsUp, Leaf, Tally2, Tally3, Target, Bell, HandCoins, MessageCircle, GitFork, Clock, Droplet } from 'lucide-react';


export const bibleBookIcons: any = {
  // Old Testament
  'Genesis': <Star />, // Creation
  'Exodus': <Anchor />, // The Israelites escape Egypt
  'Leviticus': <Shield />, // Laws and ritual
  'Numbers': <Tally3 />, // Census of the Israelites
  'Deuteronomy': <ScrollText />, // Second law
  'Joshua': <Swords />, // Conquest of Canaan
  'Judges': <Swords />, // Military leaders
  'Ruth': <Heart />, // Loyalty and redemption
  '1 Samuel': <Crown />, // Kingdom of Israel begins
  '2 Samuel': <Crown />, // King David's reign
  '1 Kings': <Crown />,
  '2 Kings': <Crown />,
  '1 Chronicles': <Tally2 />,
  '2 Chronicles': <Tally2 />,
  'Ezra': <PenTool />, // Rebuilding the temple
  'Nehemiah': <PenTool />, // Rebuilding the wall
  'Esther': <ThumbsUp />, // A queen saves her people
  'Job': <Anchor />, // Endurance and faith
  'Psalm': <BookOpen />, // Songs and prayers
  'Proverbs': <Lightbulb />, // Wisdom
  'Ecclesiastes': <Clock />, // Meaning of life
  'Song of Solomon': <Heart />, // Love
  'Isaiah': <Telescope />, // Major prophet
  'Jeremiah': <MessageCircle />, // The "weeping prophet"
  'Lamentations': <MessageCircle />,
  'Ezekiel': <MessageCircle />,
  'Daniel': <Sun />, // Visions and prophecy
  'Hosea': <MessageCircle />,
  'Joel': <Bell />,
  'Amos': <Bell />,
  'Obadiah': <Bell />,
  'Jonah': <Droplet />, // The big fish
  'Micah': <MessageCircle />,
  'Nahum': <MessageCircle />,
  'Habakkuk': <MessageCircle />,
  'Zephaniah': <MessageCircle />,
  'Haggai': <MessageCircle />,
  'Zechariah': <MessageCircle />,
  'Malachi': <MessageCircle />,

  // New Testament
  'Matthew': <PenTool />, // Gospel
  'Mark': <PenTool />, // Gospel
  'Luke': <PenTool />, // Gospel
  'John': <PenTool />, // Gospel
  'Acts': <GitFork />, // The early church
  'Romans': <Church />, // Letter to the Romans
  '1 Corinthians': <Church />, // Letter to the Corinthians
  '2 Corinthians': <Church />,
  'Galatians': <Leaf />, // The fruit of the spirit
  'Ephesians': <Shield />, // Armor of God
  'Philippians': <ThumbsUp />, // Joy
  'Colossians': <Anchor />, // Christ is the head
  '1 Thessalonians': <MessageCircle />,
  '2 Thessalonians': <MessageCircle />,
  '1 Timothy': <MessageCircle />,
  '2 Timothy': <MessageCircle />,
  'Titus': <MessageCircle />,
  'Philemon': <MessageCircle />,
  'Hebrews': <ScrollText />,
  'James': <Anchor />, // Anchor of faith
  '1 Peter': <Anchor />,
  '2 Peter': <Anchor />,
  '1 John': <Heart />, // Love and light
  '2 John': <Heart />,
  '3 John': <Heart />,
  'Jude': <HandCoins />, // Warning against false teachers
  'Revelation': <Sun />, // Vision of the end times
};