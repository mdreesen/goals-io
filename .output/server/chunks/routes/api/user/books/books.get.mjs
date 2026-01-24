import { d as defineEventHandler, c as createError } from '../../../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../../../_/loggedInUser.mjs';
import { l as latestData } from '../../../../_/latestData.mjs';
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

const books_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  try {
    let filterBooks = function(data) {
      return data == null ? void 0 : data.filter((item) => item.booklist.includes("false") || !item.booklist);
    };
    const user = await loggedInUser(event);
    const latestBooks = (_b = (_a = user == null ? void 0 : user.books) == null ? void 0 : _a.reverse()) != null ? _b : [];
    const bookOrder = (_c = user == null ? void 0 : user.books) != null ? _c : [];
    const currentRead = (_e = (_d = user == null ? void 0 : user.books) == null ? void 0 : _d.filter((item) => !(item == null ? void 0 : item.book_end_date) || (item == null ? void 0 : item.book_end_date) === "")) != null ? _e : [];
    ;
    return {
      latestData: latestData(10, bookOrder),
      current: filterBooks(currentRead)
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
