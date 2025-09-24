import { d as defineEventHandler, a as requireUserSession } from '../../../nitro/nitro.mjs';
import { c as connectDB } from '../../../_/mongodb.mjs';
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
import 'mongoose';

const index_get = defineEventHandler(async (event) => {
  try {
    await connectDB();
    const { user } = await requireUserSession(event);
    return { data: user };
  } catch (error) {
    console.log(error);
  }
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
