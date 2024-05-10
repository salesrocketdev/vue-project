<template>
  <div class="w-2/6 min-w-36 bg-white text-center rounded-[1rem] shadow">
    <img
      class="px-2 py-2 mx-auto"
      :src="props.data.imageUrl"
      alt="Brand logo"
      width="64"
      height="100"
    />

    <div class="px-4 pb-2 text-center">
      <h5 class="text-md font-semibold tracking-tight text-gray-900">{{ props.data.name }}</h5>

      <div class="text-center">
        <span class="text-sm font-black text-blue-400">+{{ props.data.quantity }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import type { Brand } from '@/types/response/brand.response'

const props = defineProps({
  data: {
    type: Object as PropType<Brand>,
    required: true,
    default() {
      return {}
    }
  }
})
</script>
