import { z } from 'zod';

import { Model } from 'mongoose';
import UserModel from '../../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  weight: z.string(),
  date: z.string()
})

export default defineEventHandler(async (event) => {
  const { weight, date } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    weight: weight,
    date: date
  }

  try {
    const id = getRouterParam(event, 'id');

    await User.findOneAndUpdate(
      { 'weight._id': id },
      { $set: { 'weight.$': { ...obj } } },
      { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
