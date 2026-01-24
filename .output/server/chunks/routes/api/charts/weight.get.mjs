import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../../_/loggedInUser.mjs';
import { y as years } from '../../../_/getYears.mjs';
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
import '../../../_/User.mjs';
import 'zod';

const weight_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const user = await loggedInUser(event);
    const formatArray = (user == null ? void 0 : user.weight) && (user == null ? void 0 : user.weight.map((item) => {
      var _a2;
      const dailyWeight = (_a2 = item.weight) != null ? _a2 : "";
      const dailyDate = item.date || item.weight_date;
      return {
        weight: Number(dailyWeight),
        date: dailyDate,
        starting_weight: item == null ? void 0 : item.starting_weight,
        _id: item == null ? void 0 : item._id
      };
    }));
    return {
      data: formatArray,
      years: years((_a = user == null ? void 0 : user.weight) != null ? _a : [])
    };
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
