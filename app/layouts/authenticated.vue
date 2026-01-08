<script setup lang="ts">
await useFetch('/api/stats', { key: 'stats' });

await useFetch('/api/charts/books', { key: 'chart_book' });
await useFetch('/api/charts/water', { key: 'chart_hydration' });
await useFetch('/api/charts/weight', { key: 'chart_weight' });
await useFetch('/api/charts/workouts', { key: 'chart_workout' });

await useFetch('/api/user/water/water', { key: 'hydration' });
await useFetch('/api/user/fasting/fasting', { key: 'fasting' });
await useFetch('/api/user/weight/weight', { key: 'weight' });
await useFetch('/api/user/workout/workout', { key: 'workout' });

await useFetch('/api/user/books/books', { key: 'books' });
await useFetch('/api/user/gratitudes/gratitudes', { key: 'gratitudes' });

await useFetch('/api/user/journal/journal', { key: 'journal' });
await useFetch('/api/user/bible/devotional', { key: 'devotional' });
await useFetch('/api/user/bible/sermon', { key: 'sermon' });

await useFetch('/api/user/profile', { key: 'profile' });

</script>

<template>
    <baseNavBar />

    <slot />
    <!-- <AppFooter /> -->
</template>