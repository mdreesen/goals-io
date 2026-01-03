<script setup lang="ts">
    definePageMeta({
        layout: 'authenticated',
    });

    const { data: journalData, pending: pending_journal } = await useFetch('/api/user/journal/journal', { lazy: true });
    const { data: devotionalData, pending: pending_devotional } = await useFetch('/api/user/bible/devotional', { lazy: true });
    const { data: sermonData, pending: pending_sermon } = await useFetch('/api/user/bible/sermon', { lazy: true });

</script>

<template>
    <div class="container-categories">
        <div>
            <baseHeader text="Devotionals" />
            <appTrackerBibleDevotional v-if="!pending_devotional" :data="devotionalData.reverse()" />
        </div>

        <div>
            <baseHeader text="Sermons" />
            <appTrackerBibleSermon v-if="!pending_sermon" :data="sermonData.reverse()" />
        </div>

        <div>
            <baseHeader text="Journal" />
            <appTrackerJournal v-if="!pending_journal" :data="journalData.reverse()" />
        </div>
    </div>
</template>