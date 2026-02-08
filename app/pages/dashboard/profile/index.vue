<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

useHead({
  title: `Ascend | Profile`,
  meta: [
    { name: 'description', content: 'Ascend Profile Dashboard.' },
  ],
});

</script>

<template>
  <div class="container-categories">
    <div>
      <appProfile />
    </div>
  </div>
</template>