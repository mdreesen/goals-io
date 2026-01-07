import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

import { Model } from 'mongoose';
import UserModel from '../../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  type: z.string().nullable(),
  book: z.string().nullable(),
  chapter: z.string().nullable(),
  verses: z.string().nullable(),
  notes: z.string().nullable(),
  date: z.string().nullable()
})

export default defineEventHandler(async (event) => {
  const { type, book, chapter, verses, notes, date } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    type: type,
    book_title: book,
    chapter: chapter,
    verses: verses,
    notes: notes,
    date: date
  };

  try {
    const user = await loggedInUser(event);
    await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { bibles: obj } }, { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
