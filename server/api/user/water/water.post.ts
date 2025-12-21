import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";
import { formatDate } from "~/utils/date"

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;

const bodySchema = z.object({
  water_intake: z.string(),
  date: z.string()
})

export default defineEventHandler(async (event) => {
  const { water_intake, date } = await readValidatedBody(event, bodySchema.parse);

  try {
    const user = await loggedInUser(event);
    const data = user?.water ?? [];

    // Latest wieght and water intake
    const latestData = data.reverse()[0];

    const waterObj = {
      water_intake: water_intake,
      date: date
    }

    // If the date matches today, then we update
    // Otherwise; we create that does not match the day
    if (latestData?.date.includes(formatDate())) {
      await User.findOneAndUpdate(
        { 'water._id': latestData?._id },
        { $set: { 'water.$': waterObj } },
        { new: true });
    } else {
      await User.findOneAndUpdate({ email: user?.email }, { $addToSet: { water: waterObj } }, { new: true });
    }

  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: 'Please try again'
    });
  };
});
