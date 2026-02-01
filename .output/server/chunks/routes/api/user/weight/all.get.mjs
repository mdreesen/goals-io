import { d as defineEventHandler, c as createError } from '../../../../nitro/nitro.mjs';
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
import '../../../../_/mongodb.mjs';
import 'mongoose';
import '../../../../_/User.mjs';
import 'zod';

const all_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const user = await loggedInUser(event);
    const formatArray = (user == null ? void 0 : user.weight) && (user == null ? void 0 : user.weight.map((item) => {
      var _a2, _b;
      const dailyWeight = (_a2 = item.weight) != null ? _a2 : "";
      return {
        weight: Number(dailyWeight),
        date: (_b = item == null ? void 0 : item.date) != null ? _b : item == null ? void 0 : item.weight_date,
        starting_weight: item == null ? void 0 : item.starting_weight,
        _id: item == null ? void 0 : item._id
      };
    }));
    return (_a = formatArray == null ? void 0 : formatArray.reverse()) != null ? _a : [];
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { all_get as default };
//# sourceMappingURL=all.get.mjs.map
