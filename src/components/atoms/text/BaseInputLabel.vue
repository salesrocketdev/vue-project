<template>
  <label :for="props.for" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    <slot> </slot>
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  for: {
    type: String,
    default: 'id'
  }
})
</script>
