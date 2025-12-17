import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  _id: z.string().nullable(),
  start_date: z.string().nullable(),
  start: z.boolean(),
  ended: z.boolean(),
  duration: z.number().nullable(),
  time_fasted: z.string().nullable(),
  completed: z.boolean()
})

export default defineEventHandler(async (event) => {
  const { _id, start_date, start, ended, duration, time_fasted, completed } = await readValidatedBody(event, bodySchema.parse);

  const fastingObj = {
    start_date: start_date,
    start: start,
    ended: ended,
    duration: duration,
    time_fasted: time_fasted,
    completed: completed
  };

  try {
    const user = await loggedInUser(event);

    if (start) {
      await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { fasting: fastingObj } }, { new: true });
    } else {
      await User.findOneAndUpdate(
        { 'fasting._id': _id },
        { $set: { 'fasting.$': fastingObj } },
        { new: true });
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
