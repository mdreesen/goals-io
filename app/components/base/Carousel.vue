<script setup lang="ts">

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
        required: true
    },
});
console.log(props.data)
</script>

<template>
    <UCarousel v-slot="{ item }" loop arrows :autoplay="{ delay: 5000 }" wheel-gestures :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }" :items="props.data" :ui="{
            item: 'basis-1/3 ps-0 flex gap-4 justify-center lg:basis-1/4 md:basis-1/4 sm:basis-1/3',
            prev: 'sm:start-8',
            next: 'sm:end-8',
            container: 'ms-0'
        }">
        <div class="h-60 flex gap-4">
            <NuxtLink :to="`/dashboard/mind/books/${[item?._id]}`"
                class="flex items-center w-full text-2xl font-extrabold">
                <NuxtImg class="object-cover h-60" :src="item?.book_image" />
            </NuxtLink>
        </div>
    </UCarousel>
</template>