<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

  definePageMeta({
      middleware: ['auth'],
  });
  </script>

<template>
  <div>
    <UApp>
      <NuxtLayout>
        <VitePwaManifest/>
        <SpeedInsights />
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>