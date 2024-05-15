<template>
  <label :for="props.for" :class="labelClasses">
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

const lightClasses = 'text-gray-900'
const darkClasses = 'dark:text-white'

const labelClasses = [
  'block mb-2 text-sm font-medium',
  lightClasses
  // darkClasses
]
</script>
