import { d as defineEventHandler, a as requireUserSession } from '../../../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';

const workout_get = defineEventHandler(async (event) => {
  const { user } = await requireUserSession(event);
  return {};
});

export { workout_get as default };
//# sourceMappingURL=workout.get.mjs.map
