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
  var _a;
  const user = await loggedInUser(event);
  const data = (_a = user == null ? void 0 : user.settings) != null ? _a : [];
  function findSetting(str) {
    var _a2;
    return (_a2 = data == null ? void 0 : data.find((item) => {
      var _a3;
      return (_a3 = item == null ? void 0 : item.setting.includes(str)) != null ? _a3 : {};
    })) != null ? _a2 : [];
  }
  return {
    affirmationSetting: findSetting("showAffirmations"),
    bibleSetting: findSetting("showBible"),
    bookSetting: findSetting("showBooks"),
    fastingSetting: findSetting("showFasting"),
    coldSoakSetting: findSetting("showColdSoak"),
    gratitudeSetting: findSetting("showGratitudes"),
    habitSetting: findSetting("showHabits"),
    journalSetting: findSetting("showJournal"),
    waterSetting: findSetting("showWaterIntake"),
    weightSetting: findSetting("showWeight"),
    workoutSetting: findSetting("showWorkout")
  };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
