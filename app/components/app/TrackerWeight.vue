<script setup lang="ts">
import { ref, computed } from 'vue';

const { data } = useNuxtData('weight');

const isLoading = ref(false);
let errorMessage = ref('');
const open = ref(false)

const currentWeight = computed(() => data.value.latestData?.weight);

const toast = useToast();

const input = reactive({
  weight: 0,
});

async function log() {
  isLoading.value = true;
  $fetch('/api/user/weight/weight', {
    method: 'POST',
    body: input
  })
    .then(async () => {
      await refreshNuxtData('weight');
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
  <ClientOnly>
    <div class="flex flex-col items-center justify-center w-full   mx-auto font-sans">

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


      <div class="container-cards">
        <template v-for="item in data.latestDataArr.reverse()">
          <transition name="slide-up" mode="out-in">
            <nuxt-link class="flex flex-col justify-center w-full items-center"
              :to="`/dashboard/body/${[item._id]}/weight`">
              <baseCard :label="`${item.weight} lbs`" :date="item.date" icon="material-symbols:monitor-weight"
                iconColor="bg-gray-500/60" iconNav="material-symbols:arrow-forward-ios-rounded" />
            </nuxt-link>
          </transition>
        </template>
      </div>



      <div class="w-full relative">

        <div class="flex flex-col items-center justify-center w-full   mx-auto p-8 font-sans">

          <div class="w-full relative mb-4 flex flex-col justify-center items-center gap-4">

            <transition name="slide-up" mode="out-in">

              <UDrawer title="Log weight" v-model:open="open">

                <baseButtonDrawer text="Log weight" icon="material-symbols:monitor-weight-outline-sharp" />
                <baseButtonNav path="/dashboard/body/all/weight" />

                <template #body>
                  <form @submit.prevent="log" class="space-y-6">
                    <div v-motion="{ ...inputVarient() }">
                      <baseLabel text="Weight" />
                      <input id="text" type="number" step="0.1" v-model="input.weight" placeholder="Example: 180.5" required
                        class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div class="text-center">
                      <baseButtonSubmit text="Save" :isLoading="isLoading" />
                    </div>
                  </form>
                </template>
              </UDrawer>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
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