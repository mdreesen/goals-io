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

const books_get = defineEventHandler(async (event) => {
  var _a;
  try {
    const user = await loggedInUser(event);
    return {
      data: user == null ? void 0 : user.books,
      years: years((_a = user == null ? void 0 : user.books) != null ? _a : [])
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { books_get as default };
//# sourceMappingURL=books.get.mjs.map
