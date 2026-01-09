<script setup lang="ts">
import { ref } from 'vue';
import { workout } from '~/utils/dropdowns/selections';
import { formatDate } from '~/utils/date';

const { data } = useNuxtData('workout');

const isLoading = ref(false);
let errorMessage = ref('');
const open = ref(false)

const { fetch: refreshSession } = useUserSession();
const toast = useToast();

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
      open.value = false;
      isLoading.value = false;
    })
    .catch(async (error) => {
      toast.error("Failed to create", 'Try again');
      console.log(error);
      errorMessage.value = error.statusMessage;
      isLoading.value = false;
    });
};

</script>

<template>
  <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto font-sans">

    <div class="container-cards">
      <template v-for="item in data?.latestData.reverse()">
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

    <div class="w-full relative">

      <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto p-8 font-sans">

        <div class="w-full relative mb-4 flex justify-center">

          <transition name="slide-up" mode="out-in">

            <UDrawer title="Log new workout" v-model:open="open">
              <UButton label="Add workout" color="neutral" variant="subtle"
                trailing-icon="material-symbols:directions-run-rounded" />

              <template #body>
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
                    <baseLabel text="Duration (in minutes)" />
                    <input id="text" type="text" v-model="input.duration" placeholder="Example: 60" required
                      class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Description" />
                    <input id="text" type="text" v-model="input.description" placeholder="Legs, arms, core..." required
                      class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <div v-motion="{ ...inputVarient() }">
                    <baseLabel text="Sets" />
                    <textarea id="text" type="text" v-model="input.sets" placeholder="Your workout sets" required
                      class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  <baseButtonSubmit text="Save" :isLoading="isLoading" />

                </form>
              </template>
            </UDrawer>
          </transition>
        </div>
      </div>
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