import { d as defineEventHandler, r as readValidatedBody, g as getRouterParam, c as createError } from '../../../../nitro/nitro.mjs';
import { z } from 'zod';
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
  type: z.string(),
  duration: z.string(),
  description: z.string(),
  sets: z.string(),
  date: z.string()
});
const index_put = defineEventHandler(async (event) => {
  const { type, duration, description, sets, date } = await readValidatedBody(event, bodySchema.parse);
  const obj = {
    type,
    duration,
    description,
    sets,
    date
  };
  try {
    const id = getRouterParam(event, "id");
    await User.findOneAndUpdate(
      { "workout._id": id },
      { $set: { "workout.$": { ...obj } } },
      { new: true }
    );
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
