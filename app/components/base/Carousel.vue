<script setup lang="ts">

const props = defineProps({
    data: {
        type: Array,
        default: () => [],
        required: true
    },
});

function icons(str: string) {
    switch(true) {
        case str === 'Audiobook':
            return "material-symbols:headphones-rounded"
            break
        case str === 'Printed':
            return "material-symbols:book-5-rounded";
            break
        case str === 'Ebook':
            return "material-symbols:fullscreen-portrait-outline";
            break
        default:
            return 'material-symbols:book-5-rounded';
    }
};

const useArrows = computed(() => props.data.length >= 3 ? true : false);
</script>

<template>
    <UCarousel v-slot="{ item }" loop :arrows="useArrows" :autoplay="{ delay: 5000 }" wheel-gestures :prev="{ variant: 'solid' }"
        :next="{ variant: 'solid' }" :items="props.data" :ui="{
            item: 'basis-1/2 ps-0 flex p-2 justify-center h-full lg:basis-1/4 md:basis-1/4 sm:basis-1/3',
            prev: 'sm:start-8',
            next: 'sm:end-8',
            container: `ms-0 items-center ${props.data.length === 1 ? 'justify-center' : '' }`
        }">
        <div class="h-full w-full flex gap-4">
            <NuxtLink :to="`/dashboard/mind/${[item?._id]}/books`"
                class="flex items-center w-full h-full text-2xl font-extrabold -x-2">
                <baseCardBook :kind="item?.kind_of_book" :title="item?.book_title" :author="item?.book_author"
                    :image="item?.book_image" :icon="icons(item?.kind_of_book)" />
            </NuxtLink>
        </div>
    </UCarousel>
</template>