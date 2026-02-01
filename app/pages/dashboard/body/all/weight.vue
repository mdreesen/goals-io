<script setup lang="ts">
definePageMeta({
    layout: 'authenticated',
});

await useFetch('/api/user/weight/all', { key: 'all_weight' });
const { data } = useNuxtData('all_weight');
</script>

<template>
    <div class="flex flex-col gap-4">
        <template v-for="item in data">
            <transition name="slide-up" mode="out-in">
                <nuxt-link class="flex flex-col justify-center w-full items-center"
                    :to="`/dashboard/body/${[item._id]}/weight`">
                    <baseCard :label="`${item.weight} lbs`" :date="item.date" icon="material-symbols:monitor-weight"
                        iconColor="bg-gray-500/60" iconNav="material-symbols:arrow-forward-ios-rounded" />
                </nuxt-link>
            </transition>
        </template>
    </div>
</template>