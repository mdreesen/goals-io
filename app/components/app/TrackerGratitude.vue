<script setup lang="ts">
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

</script>

<template>
  <div class="container-cards">
  <template v-for="item in props.data">
    <transition name="slide-up" mode="out-in">
      <nuxt-link class="flex flex-col justify-center" :to="`dashboard/mind/gratitudes/${item._id}`">
        <baseCard :text="item.description" icon="material-symbols:bolt-outline-rounded"
          iconNav="material-symbols:arrow-forward-ios-rounded" />
      </nuxt-link>
    </transition>
  </template>
  </div>
</template>