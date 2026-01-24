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

const affirmations_get = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  const user = await loggedInUser(event);
  const data = user == null ? void 0 : user.affirmations;
  const formatArray = data == null ? void 0 : data.map((item) => {
    return {
      content: item.affirmation,
      label: item.kind,
      date: item.date,
      _id: item._id
    };
  });
  const growth = (_a = formatArray == null ? void 0 : formatArray.filter((items) => items.label.includes("Growth"))) != null ? _a : [];
  const mindfulness = (_b = formatArray == null ? void 0 : formatArray.filter((items) => items.label.includes("Mindfulness"))) != null ? _b : [];
  const positivity = (_c = formatArray == null ? void 0 : formatArray.filter((items) => items.label.includes("Positivity"))) != null ? _c : [];
  const selfWorth = (_d = formatArray == null ? void 0 : formatArray.filter((items) => items.label.includes("Self Worth"))) != null ? _d : [];
  return {
    growth,
    mindfulness,
    positivity,
    selfWorth
  };
});

export { affirmations_get as default };
//# sourceMappingURL=affirmations.get.mjs.map
