import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  // _id: z.string().nullable(),
  book_title: z.string().nullable(),
  kind_of_book: z.string().nullable(),
  book_author: z.string().nullable(),
  book_start_date: z.string().nullable(),
  book_end_date: z.string().nullable(),
  notes: z.string().nullable(),
  booklist: z.boolean().nullable(),
})

export default defineEventHandler(async (event) => {
  const { book_title, kind_of_book, book_author, book_start_date, book_end_date, notes, booklist } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    book_title: book_title,
    kind_of_book: kind_of_book,
    book_author: book_author,
    book_start_date: book_start_date,
    book_end_date: book_end_date,
    notes: notes,
    booklist: booklist
  };

  try {
    const user = await loggedInUser(event);

    console.log('Also, hello');
    console.log(obj)

    // if (_id) {
    //   await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { fasting: fastingObj } }, { new: true });
    // } else {
    //   await User.findOneAndUpdate(
    //     { 'fasting._id': _id },
    //     { $set: { 'fasting.$': fastingObj } },
    //     { new: true });
    // }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
