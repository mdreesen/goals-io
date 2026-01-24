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
import '../../../../_/mongodb.mjs';
import 'mongoose';

const User = User$1;
const bodySchema = z.object({
  mood: z.string().nullable(),
  title: z.string().nullable(),
  entry: z.string().nullable()
});
const journal_post = defineEventHandler(async (event) => {
  const { mood, title, entry } = await readValidatedBody(event, bodySchema.parse);
  const obj = {
    mood,
    title,
    entry
  };
  try {
    const user = await loggedInUser(event);
    await User.findOneAndUpdate({ email: user == null ? void 0 : user.email }, { $addToSet: { journal: obj } }, { new: true });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { journal_post as default };
//# sourceMappingURL=journal.post.mjs.map
