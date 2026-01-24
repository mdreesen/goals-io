import { d as defineEventHandler } from '../../../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  var _a, _b, _c;
  const user = await loggedInUser(event);
  const data = (_b = (_a = user == null ? void 0 : user.bibles) == null ? void 0 : _a.reverse()) != null ? _b : [];
  const filterData = (_c = data == null ? void 0 : data.filter((item) => {
    return item == null ? void 0 : item.type.includes("Devotional");
  })) != null ? _c : [];
  return latestData(5, filterData);
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
