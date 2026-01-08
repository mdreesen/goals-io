import { z } from 'zod';
import loggedInUser from "~/utils/loggedInUser";

import { Model } from 'mongoose';
import UserModel from '../../../../lib/database/models/User';
import { User } from '~/types/user';
const User = UserModel as Model<User>;
import type { WaterType } from '~/types/water';

const bodySchema = z.object({
  water_intake: z.string(),
  date: z.string(),
  action: z.boolean()
})

export default defineEventHandler(async (event) => {
  const { water_intake, date, action } = await readValidatedBody(event, bodySchema.parse);

  try {
    const user = await loggedInUser(event);
    const data = user?.water ?? [];

    // Latest wieght and water intake
    const latestData = data.reverse()[0] as WaterType;

    const waterObj = {
      water_intake: water_intake,
      date: date
    };

    // If the date matches today, then we update
    // Otherwise; we create that does not match the day
    if (action) {
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
