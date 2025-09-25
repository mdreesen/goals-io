import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../../_/loggedInUser.mjs';
import { a as monthStart } from '../../../_/months.mjs';
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

const coldsoaks_get = defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    return monthStart({ data: user.cold_soaks, startLabel: "dateFormatted" });
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { coldsoaks_get as default };
//# sourceMappingURL=coldsoaks.get.mjs.map
