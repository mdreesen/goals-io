<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

const { pending: pending_profile } = await useFetch('/api/user/profile', { key: 'profile' });

</script>

<template>
  <div class="container-categories">
    <div v-if="!pending_profile">
      <appProfile />
    </div>
  </div>
</template>