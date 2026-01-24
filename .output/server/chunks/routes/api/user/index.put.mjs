import { d as defineEventHandler, r as readValidatedBody, c as createError } from '../../../nitro/nitro.mjs';
import { z } from 'zod';
import { l as loggedInUser } from '../../../_/loggedInUser.mjs';
import { U as User$1 } from '../../../_/User.mjs';
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
import '../../../_/mongodb.mjs';
import 'mongoose';

const User = User$1;
const bodySchema = z.object({
  username: z.string().nullable(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable()
});
const index_put = defineEventHandler(async (event) => {
  const { username, first_name, last_name } = await readValidatedBody(event, bodySchema.parse);
  const obj = {
    username,
    first_name,
    last_name
  };
  try {
    const user = await loggedInUser(event);
    await User.findOneAndUpdate(
      { _id: user == null ? void 0 : user._id },
      { ...obj },
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
