<script setup lang="ts">
import { useSettings } from '~/store';

const settingsStore = useSettings();
const { data: profileData, pending: pending_profile, refresh: refresh_settings } = await useFetch(() => '/api/user/profile');

settingsStore.set(profileData.value?.settings);

</script>

<template>
    <appNavBar />

    <slot />
    <!-- <AppFooter /> -->
</template>