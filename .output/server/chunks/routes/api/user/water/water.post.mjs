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
  water_intake: z.string(),
  date: z.string(),
  action: z.boolean()
});
const water_post = defineEventHandler(async (event) => {
  var _a;
  const { water_intake, date, action } = await readValidatedBody(event, bodySchema.parse);
  try {
    const user = await loggedInUser(event);
    const data = (_a = user == null ? void 0 : user.water) != null ? _a : [];
    const latestData = data.reverse()[0];
    const waterObj = {
      water_intake,
      date
    };
    if (action) {
      await User.findOneAndUpdate(
        { "water._id": latestData == null ? void 0 : latestData._id },
        { $set: { "water.$": waterObj } },
        { new: true }
      );
    } else {
      await User.findOneAndUpdate({ email: user == null ? void 0 : user.email }, { $addToSet: { water: waterObj } }, { new: true });
    }
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 401,
      message: "Please try again"
    });
  }
});

export { water_post as default };
//# sourceMappingURL=water.post.mjs.map
