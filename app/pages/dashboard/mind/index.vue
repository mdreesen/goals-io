<script setup lang="ts">
    definePageMeta({
        layout: 'authenticated',
    });
</script>

<template>
    <div>
        <h1>Welcome to the mind page</h1>

        <appTrackerAffirmation />
        <appTrackerBook />
        <appTrackerGratitude />
        <appTrackerHabit />
    </div>
</template>