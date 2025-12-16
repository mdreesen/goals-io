import { d as defineEventHandler, r as readValidatedBody, c as createError } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
import { l as loggedInUser } from '../../../../_/loggedInUser.mjs';
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
import '../../../../_/User.mjs';
import 'mongoose';

const bodySchema = z.object({
  start_date: z.string().nullable(),
  start: z.boolean(),
  ended: z.boolean(),
  duration: z.number(),
  time_fasted: z.string().nullable()
});
const fasting_post = defineEventHandler(async (event) => {
  var _a, _b;
  const { start_date, start, ended, duration, time_fasted } = await readValidatedBody(event, bodySchema.parse);
  try {
    const user = await loggedInUser(event);
    const data = (_a = user == null ? void 0 : user.fasting) != null ? _a : [];
    const latestData = (_b = data.reverse()[0]) != null ? _b : {};
    console.log("latest", latestData);
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
