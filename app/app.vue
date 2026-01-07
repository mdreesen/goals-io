<script setup lang="ts">
  definePageMeta({
      middleware: ['auth'],
  });
  </script>

<template>
  <div>
    <UApp>
      <NuxtLayout>
        <VitePwaManifest/>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>