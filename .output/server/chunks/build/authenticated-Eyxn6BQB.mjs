import { f as defineNuxtRouteMiddleware, a as useUserSession, n as navigateTo } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:crypto';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import 'vue/server-renderer';

const authenticated = defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();
  if (!loggedIn.value) {
    return navigateTo("/login");
  }
});

export { authenticated as default };
//# sourceMappingURL=authenticated-Eyxn6BQB.mjs.map
