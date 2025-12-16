import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";
import { formatDate } from "~/utils/date"

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  start_date: z.string().nullable(),
  start: z.boolean(),
  ended: z.boolean(),
  duration: z.number(),
  time_fasted: z.string().nullable()
})

export default defineEventHandler(async (event) => {
  const { start_date, start, ended, duration, time_fasted } = await readValidatedBody(event, bodySchema.parse);

  const fastingObjStart = {
    start_date: start_date,
    start: start,
    ended: ended,
    duration: duration
  };

  const fastingObjEnd = {
    start_date: start_date,
    start: false,
    ended: ended,
    duration: duration,
    time_fasted: time_fasted
  }

  try {
    const user = await loggedInUser(event);
    const data = user?.fasting ?? [];

    // Latest wieght and water intake
    const latestData = data.reverse()[0] ?? {};
    console.log('latest', latestData);
    // if (!latestData.start) {
    //   console.log('create', !latestData.start)
    //   await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { fasting: fastingObjStart } }, { new: true });
    // } else {
    //   await User.findOneAndUpdate(
    //     { 'fasting._id': latestData?._id },
    //     { $set: { 'fasting.$': fastingObjEnd } },
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
