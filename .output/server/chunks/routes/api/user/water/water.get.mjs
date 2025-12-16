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
import '../../../../_/User.mjs';
import 'mongoose';
import 'zod';

const water_get = defineEventHandler(async (event) => {
  var _a, _b;
  try {
    const user = await loggedInUser(event);
    const data = (_a = user == null ? void 0 : user.water) != null ? _a : [];
    const weight = (_b = user == null ? void 0 : user.weight) != null ? _b : [];
    const latestWater = data.reverse()[0];
    const latestWeight = weight.reverse()[0];
    return {
      latestWeight,
      latestWater
    };
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
