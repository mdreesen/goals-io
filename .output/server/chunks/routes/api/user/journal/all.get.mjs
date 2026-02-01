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
  var _a, _b;
  try {
    const user = await loggedInUser(event);
    const data = (_b = (_a = user == null ? void 0 : user.journal) == null ? void 0 : _a.reverse()) != null ? _b : [];
    return data;
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
