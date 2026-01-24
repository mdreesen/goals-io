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

const gratitudes_get = defineEventHandler(async (event) => {
  const user = await loggedInUser(event);
  const data = user == null ? void 0 : user.gratitudes;
  const latestData = data == null ? void 0 : data.reverse();
  const formatArray = latestData == null ? void 0 : latestData.map((item) => {
    return {
      description: item.gratitude,
      _id: item._id
    };
  });
  return formatArray != null ? formatArray : [];
});

export { gratitudes_get as default };
//# sourceMappingURL=gratitudes.get.mjs.map
