import { z } from 'zod';

import { Model } from 'mongoose';
import UserModel from '../../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  mood: z.string().nullable(),
  title: z.string().nullable(),
  entry: z.string().nullable()
})

export default defineEventHandler(async (event) => {
  const { mood, title, entry } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    mood: mood,
    title: title,
    entry: entry
  };

  try {
    const id = getRouterParam(event, 'id');

    await User.findOneAndUpdate(
      { 'journal._id': id },
      { $set: { 'journal.$': { ...obj } } },
      { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
