import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../../_/loggedInUser.mjs';
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
import '../../../_/User.mjs';
import 'mongoose';
import 'zod';

const water_get = defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const formatArray = (user == null ? void 0 : user.water) && (user == null ? void 0 : user.water.map((item) => {
      var _a;
      const dailyWater = (_a = item.water_intake) != null ? _a : "";
      return {
        water_intake: Number(dailyWater),
        date: item == null ? void 0 : item.date,
        _id: item == null ? void 0 : item._id
      };
    }));
    return formatArray;
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { water_get as default };
//# sourceMappingURL=water.get.mjs.map
