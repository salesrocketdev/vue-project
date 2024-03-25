<template>
  <p class="mt-2 text-sm text-red-600 dark:text-red-500">
    <span class="font-medium">{{ props.errorMessage }}</span>
  </p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  errorMessage: {
    type: [String, Object, null],
    default: 'Message'
  }
})
</script>
