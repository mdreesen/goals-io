import { z } from 'zod';

import { Model } from 'mongoose';
import UserModel from '../../../../../lib/database/models/User';
import { User } from '~/types/user';
import { formatDate } from '~/utils/date';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  book_title: z.string().nullable(),
  kind_of_book: z.string().nullable(),
  book_author: z.string().nullable(),
  book_start_date: z.string().nullable(),
  notes: z.string().nullable(),
  booklist: z.boolean().nullable(),
  book_image: z.string().nullable(),
  status: z.union([z.string(), z.boolean()])
})

export default defineEventHandler(async (event) => {
  const { book_title, kind_of_book, book_author, book_start_date, notes, booklist, book_image, status } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    book_title: book_title,
    kind_of_book: kind_of_book,
    book_author: book_author,
    book_start_date: book_start_date,
    notes: notes,
    booklist: booklist,
    book_image: book_image,
    status: status
  };

  const completed = status && { book_end_date: formatDate() };

  try {
    const id = getRouterParam(event, 'id');

    await User.findOneAndUpdate(
      { 'books._id': id },
      { $set: { 'books.$': { ...obj, ...completed } } },
      { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
