import { d as defineEventHandler, r as readValidatedBody, c as createError } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { l as loggedInUser } from '../../../../_/loggedInUser.mjs';
import { U as User$1 } from '../../../../_/User.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import 'mongoose';

const User = User$1;
const bodySchema = z.object({
  _id: z.string().nullable(),
  start_date: z.string().nullable(),
  start: z.boolean(),
  ended: z.boolean(),
  duration: z.number().nullable(),
  time_fasted: z.string().nullable(),
  completed: z.boolean()
});
const fasting_post = defineEventHandler(async (event) => {
  const { _id, start_date, start, ended, duration, time_fasted, completed } = await readValidatedBody(event, bodySchema.parse);
  const fastingObj = {
    start_date,
    start,
    ended,
    duration,
    time_fasted,
    completed
  };
  try {
    const user = await loggedInUser(event);
    if (start) {
      await User.findOneAndUpdate({ email: user == null ? void 0 : user.email }, { $addToSet: { fasting: fastingObj } }, { new: true });
    } else {
      await User.findOneAndUpdate(
        { "fasting._id": _id },
        { $set: { "fasting.$": fastingObj } },
        { new: true }
      );
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { fasting_post as default };
//# sourceMappingURL=fasting.post.mjs.map
