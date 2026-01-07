import { z } from 'zod';

import { Model } from 'mongoose';
import UserModel from '../../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  type: z.string(),
  duration: z.string(),
  description: z.string(),
  sets: z.string(),
  date: z.string()
})

export default defineEventHandler(async (event) => {
  const { type, duration, description, sets, date} = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    type: type,
    duration: duration,
    description: description,
    sets: sets,
    date: date
  };

  try {
    const id = getRouterParam(event, 'id');

    await User.findOneAndUpdate(
      { 'workout._id': id },
      { $set: { 'workout.$': { ...obj } } },
      { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
