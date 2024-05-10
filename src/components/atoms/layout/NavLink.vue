<template>
  <li class="px-4 py-2 text-md duration-300">
    <RouterLink class="p-4 w-full text-gray-600 font-semibold" :to="props.route">
      {{ props.label }}
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  label: {
    type: String,
    default: 'Texto'
  },
  route: {
    type: String,
    default: '/'
  }
})
</script>
