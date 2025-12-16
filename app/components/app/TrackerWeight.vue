<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

const isLoading = ref(false);
let errorMessage = ref('');

const currentWeight = computed(() => props.data?.latestData?.weight);

const { fetch: refreshSession } = useUserSession()


const input = reactive({
  weight: '',
});

async function log() {
  isLoading.value = true;
  $fetch('/api/user/weight/weight', {
    method: 'POST',
    body: input
  })
    .then(async () => {
      await refreshSession();

      isLoading.value = false;
    })
    .catch(async (error) => {
      console.log(error);
      errorMessage.value = error.statusMessage;
      isLoading.value = false;
    });
};

</script>

<template>
  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

    <div class="relative w-full flex flex-col items-center justify-center mb-10 group">

      <div class="relative z-10 flex items-baseline gap-1 cursor-pointer">


        <div class="relative w-48">
          <div
            class="w-full flex gap-2 justify-center items-baseline bg-transparent text-center text-6xl font-bold text-white focus:outline-none pb-2">
            <span>{{ currentWeight }}</span>
            <span class="text-sm">lbs.</span>
          </div>
        </div>
      </div>

    </div>

    <div class="w-full relative">

      <transition name="slide-up" mode="out-in">

        <form @submit.prevent="log" class="space-y-6">
          <div v-motion="{ ...inputVarient() }">
            <label for="text" class="block text-sm font-medium text-gray-300 mb-1">Log Weight</label>
            <input id="text" type="text" v-model="input.weight" placeholder="Example: 180.5" required
              class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div v-motion="{ ...inputVarient() }">
            <button type="submit" :disabled="isLoading"
              :class="`${isLoading ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`">
              {{ isLoading ? 'Saving...' : 'Save' }}
            </button>
          </div>
        </form>
      </transition>
    </div>

  </div>
</template>

<style scoped>
/* Smooth Input Handling */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  appearance: auto;
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>