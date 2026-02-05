import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  start_date: z.string(),
  start: z.boolean(),
  duration: z.number()
})

export default defineEventHandler(async (event) => {
  const { start_date, start, duration } = await readValidatedBody(event, bodySchema.parse);

  const fastingObj = {
    start_date: start_date,
    start: start,
    duration: duration
  }

  try {
    const user = await loggedInUser(event);

    await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { fasting: { ...fastingObj } } }, { new: true });

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
