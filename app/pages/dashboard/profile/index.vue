<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

const { data: profileData, pending: pending_profile } = await useFetch('/api/user/profile/settings', { lazy: true });

</script>

<template>
  <div class="container-categories">
    <div>
      <appProfile v-if="!pending_profile" :data="profileData" />
    </div>
  </div>
</template>