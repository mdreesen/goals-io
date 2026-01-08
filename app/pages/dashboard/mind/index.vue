<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

</script>

<template>
    <div class="container-categories">
        <!-- <div>
            <baseHeader text="Affirmations" />
            <appTrackerAffirmation v-if="!pending_affirmations" :data="affirmationData" />
        </div> -->

        <div>
            <baseHeader text="Books" />
            <appTrackerBook/>
        </div>

        <div>
            <baseHeader text="Gratitudes" />
            <appTrackerGratitude />
        </div>

        <!-- <div>
            <baseHeader text="Habits" />
            <appTrackerHabit />
        </div> -->
    </div>
</template>