<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

await useFetch('/api/user/workout/all', { key: 'all_workouts' });
const { data } = useNuxtData('all_workouts');
</script>

<template>
    <div class="container-cards">
        <template v-for="item in data">
            <transition name="slide-up" mode="out-in">
                <nuxt-link class="flex flex-col justify-center w-full items-center"
                    :to="`/dashboard/body/${[item._id]}/workout`">
                    <baseCard :label="item.type" :text="item.description" :date="item.date"
                        icon="material-symbols:run-circle-rounded" iconColor="bg-blue-500/60"
                        iconNav="material-symbols:arrow-forward-ios-rounded" />
                </nuxt-link>
            </transition>
        </template>
    </div>
</template>