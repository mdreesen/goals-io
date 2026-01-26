<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import { useColorMode } from '#imports'; // This import works in Nuxt 3/4 setup scripts

const colorMode = useColorMode();

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Main',
  to: '/dashboard',
  // icon: 'i-lucide-book-open',
}, {
  label: 'Body',
  to: '/dashboard/body',
  // icon: 'mdi-light:account',
}, {
  label: 'Mind',
  // icon: 'i-simple-icons-figma',
  to: '/dashboard/mind',
}, {
  label: 'Spirit',
  // icon: 'i-lucide-rocket',
  to: '/dashboard/spirit',
}, {
  label: 'Profile',
  // icon: 'i-lucide-rocket',
  to: '/dashboard/profile',
}])
</script>

<template>
  <ClientOnly>
    <UHeader mode="slideover" class="border-none">
      <template #title>
        <!-- Logo/Brand Name -->
        <NuxtLink to="/" class="flex items-center text-2xl font-extrabold h-10">
          <span class="text-2xl font-bold">
            ASCΞND
          </span>
          <NuxtImg v-if="colorMode.value !== 'light'"
            class="h-25 w-25 opacity-60 -left-14.5 relative rounded-full object-cover lg:hidden md:hidden"
            alt="White Raven Logo" format="webp" width="200px" height="200px" src="/images/logo_transparent_512x512.png"
            loading="lazy" fetch-priority="low" />
        </NuxtLink>
      </template>

      <UNavigationMenu color="neutral" :items="items" />

      <template #body>
        <UNavigationMenu color="neutral" :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>
  </ClientOnly>
</template>
