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

const journal_get = defineEventHandler(async (event) => {
  var _a, _b;
  const user = await loggedInUser(event);
  const data = (_a = user == null ? void 0 : user.journal) == null ? void 0 : _a.reverse();
  return (_b = latestData(5, data)) != null ? _b : [];
});

export { journal_get as default };
//# sourceMappingURL=journal.get.mjs.map
