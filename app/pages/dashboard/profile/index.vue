<script setup lang="ts">
definePageMeta({
  layout: 'authenticated',
});

// const { pending: pending_profile } = await useFetch('/api/user/profile', { key: 'profile' });

</script>

<template>
  <div class="container-categories">
    <div>
      <appProfile />
    </div>
  </div>
</template>