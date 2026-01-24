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

const fasting_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const user = await loggedInUser(event);
    const data = (_a = user == null ? void 0 : user.fasting) != null ? _a : [];
    const latestData = data.reverse()[0];
    return {
      latestData: latestData != null ? latestData : {}
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { fasting_get as default };
//# sourceMappingURL=fasting.get.mjs.map
