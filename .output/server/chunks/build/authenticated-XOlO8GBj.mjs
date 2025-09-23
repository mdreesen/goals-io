import { e as defineNuxtRouteMiddleware, d as useUserSession, n as navigateTo } from './server.mjs';
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
import 'vue/server-renderer';

const authenticated = defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession();
  console.log("loggedIn", loggedIn);
  if (!loggedIn.value) {
    return navigateTo("/login");
  }
});

export { authenticated as default };
//# sourceMappingURL=authenticated-XOlO8GBj.mjs.map
