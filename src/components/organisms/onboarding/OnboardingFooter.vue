<template>
  <footer class="w-full px-6 py-4">
    <section class="flex flex-row justify-center items-center mb-6">
      <template v-for="index in 3" :key="index">
        <div
          :class="[
            'h-2.5 mr-2 rounded-lg',
            step == index ? 'w-5 bg-[#8760e0]' : 'w-2.5 bg-[#e8e8ed]'
          ]"
        />
      </template>
    </section>

    <div class="flex justify-end" v-if="step == 1">
      <LabelButton
        :label="'Próximo'"
        :text-color="'primary'"
        :route="'step2'"
        @click="step = step + 1"
      />
    </div>

    <div class="flex justify-between w-full" v-else-if="step == 2">
      <LabelButton
        :label="'Voltar'"
        :text-color="'gray'"
        :route="'step1'"
        @click="step = step - 1"
      />

      <LabelButton
        :label="'Próximo'"
        :text-color="'primary'"
        :route="'step3'"
        @click="step = step + 1"
      />
    </div>

    <div class="flex justify-between w-full" v-else-if="step == 3">
      <LabelButton
        :label="'Voltar'"
        :text-color="'gray'"
        :route="'step2'"
        @click="step = step - 1"
      />

      <LabelButton :label="'Finalizar'" :text-color="'primary'" :route="'../auth/signIn'" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import LabelButton from '@/components/atoms/LabelButton.vue'

const route = useRoute()

const step = ref(1)

onMounted(() => {
  const currentRoute = route.path
  if (currentRoute.includes('step1')) {
    step.value = 1
  } else if (currentRoute.includes('step2')) {
    step.value = 2
  } else if (currentRoute.includes('step3')) {
    step.value = 3
  }
})
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
}

@media (min-width: 1024px) {
  footer {
    position: initial;
  }
}
</style>
