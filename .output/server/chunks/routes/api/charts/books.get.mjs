import { d as defineEventHandler, c as createError } from '../../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../../_/loggedInUser.mjs';
import { m as monthStartEnd } from '../../../_/months.mjs';
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

const books_get = defineEventHandler(async (event) => {
  try {
    const user = await loggedInUser(event);
    return monthStartEnd({ data: user.books, startLabel: "book_start_date", endLabel: "book_end_date" });
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
