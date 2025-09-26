import { d as defineEventHandler, c as createError } from '../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../_/loggedInUser.mjs';
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
import '../../_/User.mjs';
import 'mongoose';
import 'zod';

const index_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e;
  try {
    const user = await loggedInUser(event);
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const books = (_a = user == null ? void 0 : user.books) != null ? _a : [];
    const coldSoaks = (_b = user == null ? void 0 : user.cold_soaks) != null ? _b : [];
    const fasting = (_c = user == null ? void 0 : user.fasting) != null ? _c : [];
    const waterIntake = (_d = user == null ? void 0 : user.water) != null ? _d : [];
    const weight = (_e = user == null ? void 0 : user.weight) != null ? _e : [];
    const bookCurrentStartedYear = books.filter((item) => {
      var _a2;
      return (_a2 = item.book_start_date) == null ? void 0 : _a2.includes(year);
    }).length;
    const bookCurrentEndedYear = books.filter((item) => {
      var _a2;
      return (_a2 = item == null ? void 0 : item.book_end_date) == null ? void 0 : _a2.includes(year);
    }).length;
    const latestColdSoak = coldSoaks.reverse()[0];
    const latestFasting = fasting.reverse()[0];
    const latestWater = waterIntake.reverse()[0];
    const latestWeight = weight.reverse()[0];
    return {
      bookCurrentStartedYear,
      bookCurrentEndedYear,
      latestColdSoak,
      latestFasting,
      latestWater,
      latestWeight
    };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong."
    });
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
