import { z } from 'zod';

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  gratitude: z.string().nullable(),
  date: z.string().nullable(),
})

export default defineEventHandler(async (event) => {
  const { gratitude, date } = await readValidatedBody(event, bodySchema.parse);

  const obj = {
    gratitude: gratitude,
    date: date,
  };

  try {
    const id = getRouterParam(event, 'id');

    await User.findOneAndUpdate(
        { _id: _id },
        { email: email.toLowerCase(), ...values },
        { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
