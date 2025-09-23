import { d as defineEventHandler, a as requireUserSession } from '../../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';

const weight_get = defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  return {};
});

export { weight_get as default };
//# sourceMappingURL=weight.get.mjs.map
