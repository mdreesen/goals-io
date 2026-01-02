<script setup lang="ts">
    definePageMeta({
        layout: 'authenticated',
    });

    const { data: journalData, pending: pending_journal } = await useFetch('/api/user/journal/journal', { lazy: true });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Journal" />
            <appTrackerJournal v-if="!pending_journal" :data="journalData" />
        </div>
    </div>
</template>