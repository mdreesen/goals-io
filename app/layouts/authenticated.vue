<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia'
import { useSettings } from '~/store';
import { parse } from '~/utils/formatters/dataParse';

const settingsStore = useSettings();
const { data: profileData, pending: pending_profile, refresh: refresh_settings } = await useFetch(() => '/api/user/profile');

settingsStore.setSettings(parse(profileData.value?.settings));

// settingsStore.setSettings(parse(profileData.value?.settings));

</script>

<template>
    <appNavBar />

    <slot />
    <!-- <AppFooter /> -->
</template>