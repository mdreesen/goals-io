import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { l as loggedInUser } from '../../../_/loggedInUser.mjs';
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

const index_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d, _e, _f;
  const user = await loggedInUser(event);
  const data = user;
  const bodyArr = ["showFasting", "showWaterIntake", "showWeight", "showWorkout"];
  const mindArr = ["showBooks", "showGratitudes"];
  const spiritArr = ["showBible", "showJournal"];
  const bodySettings = (_b = (_a = data == null ? void 0 : data.settings) == null ? void 0 : _a.filter((item) => bodyArr.includes(item == null ? void 0 : item.setting))) != null ? _b : [];
  const mindSettings = (_d = (_c = data == null ? void 0 : data.settings) == null ? void 0 : _c.filter((item) => mindArr.includes(item == null ? void 0 : item.setting))) != null ? _d : [];
  const spiritSettings = (_f = (_e = data == null ? void 0 : data.settings) == null ? void 0 : _e.filter((item) => spiritArr.includes(item == null ? void 0 : item.setting))) != null ? _f : [];
  return {
    username: data == null ? void 0 : data.username,
    first_name: (data == null ? void 0 : data.first_name) ? data == null ? void 0 : data.first_name : "Ascender",
    last_name: data == null ? void 0 : data.last_name,
    bodySettings,
    mindSettings,
    spiritSettings,
    settings: data
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
