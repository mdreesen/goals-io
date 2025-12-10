import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";
import { formatDate } from "~/utils/date"

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  weight: z.string()
})

export default defineEventHandler(async (event) => {
  const { weight } = await readValidatedBody(event, bodySchema.parse);

  try {
    const user = await loggedInUser(event);

    await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { weight: { weight: weight, weight_date: formatDate() } } }, { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
