<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

const { data: profileData, pending: pending_profile } = await useFetch('/api/user/profile', { lazy: true });

</script>

<template>
  <div class="container-categories">
    <div v-if="!pending_profile">
      <appProfile :data="profileData" />
    </div>
  </div>
</template>