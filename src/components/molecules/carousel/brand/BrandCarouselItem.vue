<template>
  <div class="w-2/6 min-w-36 bg-white text-center rounded-[1rem] shadow">
    <img
      class="px-2 py-2 mx-auto"
      :src="
        props.data.brandImage
          ? props.data.brandImage
          : 'https://nlkthtktgjaogtfqqggb.supabase.co/storage/v1/object/sign/brand-images/notfoundbrand.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJicmFuZC1pbWFnZXMvbm90Zm91bmRicmFuZC5zdmciLCJpYXQiOjE3MTUzMDk3NzEsImV4cCI6MTc0Njg0NTc3MX0.CmdfJGvmsrbP7SHJV9VTVnGpKDj_okFpNNjnCQ29eVg&t=2024-05-10T02%3A56%3A11.864Z'
      "
      alt="Brand logo"
      width="150"
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
