import { d as defineEventHandler } from '../../../../nitro/nitro.mjs';
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

const index_get = defineEventHandler(async (event) => {
  const user = await loggedInUser(event);
  const data = user == null ? void 0 : user.settings;
  const bodyArr = ["showFasting", "showWater", "showWeight", "showWorkout"];
  const mindArr = ["showBooks", "showGratitudes"];
  const spiritArr = ["showBible", "showJournal"];
  const bodySettings = data == null ? void 0 : data.filter((item) => bodyArr.includes(item == null ? void 0 : item.setting));
  const mindSettings = data == null ? void 0 : data.filter((item) => mindArr.includes(item == null ? void 0 : item.setting));
  const spiritSettings = data == null ? void 0 : data.filter((item) => spiritArr.includes(item == null ? void 0 : item.setting));
  return {
    bodySettings,
    mindSettings,
    spiritSettings,
    settings: data
  };
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
