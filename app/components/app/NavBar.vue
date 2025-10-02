<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

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
  <UHeader mode="slideover" class="border-none">
    <template #title>
      <!-- Logo/Brand Name -->
      <NuxtLink to="/" class="flex items-center text-2xl font-extrabold h-[40px]">
        <span class="text-2xl font-bold">
          ASCΞND
        </span>
        <NuxtImg
          class="h-[100px] w-[100px] opacity-60 left-[-58px] relative rounded-full object-cover scale-75 lg:hidden md:hidden"
          alt="White Raven Logo" format="webp" width="56px" height="100px" src="/images/logo_transparent_512x512.png" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
