import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;
import { images_books } from '../../../../lib/api/images';

const bodySchema = z.object({
  book_title: z.string().nullable(),
  kind_of_book: z.string().nullable(),
  book_author: z.string().nullable(),
  book_start_date: z.string().nullable(),
  notes: z.string().nullable(),
  booklist: z.boolean().nullable(),
  status: z.union([z.string(), z.boolean()])
})

export default defineEventHandler(async (event) => {
  const { book_title, kind_of_book, book_author, book_start_date, notes, booklist, status } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    book_title: book_title,
    kind_of_book: kind_of_book,
    book_author: book_author,
    book_start_date: book_start_date,
    notes: notes,
    booklist: booklist,
    status: status
  };

  try {
    const user = await loggedInUser(event);
    const useImages = await images_books({ book_title: book_title, book_author: book_author });
    await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { books: { ...obj, book_image: useImages } } }, { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
