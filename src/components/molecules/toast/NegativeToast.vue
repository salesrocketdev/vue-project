<template>
  <div
    id="toast-default"
    class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow fixed bottom-3 right-3"
    role="alert"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-red-200 rounded-lg"
    >
      <IconButton class="ms-auto" :icon="'times'" />
    </div>

    <div class="ms-3 text-sm font-normal">{{ props.message }}</div>

    <BaseIconButton :style-name="'outline'" :icon="'times'" @click="emits('close')" />
  </div>
</template>

<script setup lang="ts">
import BaseIconButton from '@/components/atoms/button/BaseIconButton.vue'

const emits = defineEmits(['close'])

const props = defineProps({
  message: {
    type: String,
    default: 'Set yourself free.'
  }
})
</script>
