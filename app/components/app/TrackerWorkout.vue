<script setup lang="ts">
import { ref } from 'vue';
import { workout } from '~/utils/dropdowns/selections';
import { formatDate } from '~/utils/date';

const props = defineProps({
  data: {
    type: Object,
    default: () => { },
    required: true
  },
});

const isLoading = ref(false);
let errorMessage = ref('');

const { fetch: refreshSession } = useUserSession()

const input = reactive({
  type: '',
  duration: '',
  description: '',
  sets: ''
});

async function log() {
  isLoading.value = true;
  $fetch('/api/user/workout/workout', {
    method: 'POST',
    body: {
      ...input,
      date: formatDate()
    }
  })
    .then(async () => {
      await refreshSession();
      await refreshNuxtData();

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

    <!-- <div class="container-cards">
      <template v-for="item in props.data">
        <transition name="slide-up" mode="out-in">
          <nuxt-link class="flex flex-col justify-center w-full items-center"
            :to="`/dashboard/spirit/bible/devotional/${[item._id]}`">
            <baseCard :label="item.book_title"
              :text="`${item?.chapter ? `Chapter ${item?.chapter} •` : ''} Verse ${item?.verses ? item?.verses : ''}`"
              :date="item?.date"
              icon="material-symbols:shield-spark-rounded" iconColor="bg-gray-500/60"
              iconNav="material-symbols:arrow-forward-ios-rounded" />
          </nuxt-link>
        </transition>
      </template>
</div> -->

    <div class="w-full relative">

      <transition name="slide-up" mode="out-in">

        <form @submit.prevent="log" class="space-y-6">
          <div v-motion="{ ...inputVarient() }">
            <select id="status-select" v-model="input.type" required
              class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected hidden>Choose workout</option>
              <option v-for="item in workout" :value="item.value" :key="item.label">
                {{ item.label }}
              </option>
            </select>
          </div>

          <div v-motion="{ ...inputVarient() }">
            <label for="text" class="block text-sm font-medium text-gray-300 mb-1">Duration (in minutes)</label>
            <input id="text" type="text" v-model="input.duration" placeholder="Example: 60" required
              class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div v-motion="{ ...inputVarient() }">
            <label for="text" class="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <input id="text" type="text" v-model="input.description" placeholder="Legs, arms, core..." required
              class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div v-motion="{ ...inputVarient() }">
            <label for="text" class="block text-sm font-medium text-gray-300 mb-1">Sets</label>
            <textarea id="text" type="text" v-model="input.sets" placeholder="Your workout sets" required
              class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <baseButtonSubmit text="Save" :isLoading="isLoading" />

          <!-- <div v-motion="{ ...inputVarient() }">
              <button type="submit" :disabled="isLoading"
                :class="`${isLoading ? 'bg-gradient-to-r from-gray-500 to-gray-600' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'} w-full rounded-xl py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out`">
                {{ isLoading ? 'Saving...' : 'Save' }}
              </button>
            </div> -->
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