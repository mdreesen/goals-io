<script setup lang="ts">

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
        required: true
    },
});

</script>

<template>
    <UCarousel v-slot="{ item }" loop arrows :autoplay="{ delay: 3000 }" wheel-gestures :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }" :items="props.data" :ui="{
            item: 'basis-1/3 ps-0 flex justify-center lg:basis-1/4 md:basis-1/4 sm:basis-1/3',
            prev: 'sm:start-8',
            next: 'sm:end-8',
            container: 'ms-0'
        }">
        <div class="w-40 h-60 px-4">
            <!-- <img class="object-cover w-40 h-60" :src="item?.book_image" width="320" height="320"> -->
            <NuxtLink :to="`/dashboard/mind/books/${[item?._id]}`"
                class="flex items-center text-2xl font-extrabold h-[40px]">
                <NuxtImg class="object-cover w-40 h-60" :src="item?.book_image" />
            </NuxtLink>

        </div>
    </UCarousel>
</template>