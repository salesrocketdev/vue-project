<template>
  <label :for="props.for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  for: {
    type: String,
    default: 'id'
  },
  label: {
    type: String,
    default: 'Id'
  }
})
</script>
