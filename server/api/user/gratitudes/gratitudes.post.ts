import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

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
    const user = await loggedInUser(event);
    await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { gratitudes: obj } }, { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
