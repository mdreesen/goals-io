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

const weight_get = defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    const formatArray = user == null ? void 0 : user.weight.map((item) => {
      var _a;
      const dailyWeight = (_a = item.weight) != null ? _a : "";
      return {
        weight: Number(dailyWeight),
        date: item == null ? void 0 : item.weight_date,
        starting_weight: item == null ? void 0 : item.starting_weight,
        _id: item == null ? void 0 : item._id
      };
    });
    return formatArray;
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { weight_get as default };
//# sourceMappingURL=weight.get.mjs.map
