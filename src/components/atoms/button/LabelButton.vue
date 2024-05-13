<template>
  <button :class="`bg-${props.backgroundColor}`">
    <RouterLink :class="`text-sm text-${props.textColor} font-bold `" :to="props.route">
      {{ props.label }}
    </RouterLink>
  </button>
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
  },
  textColor: {
    type: String,
    default: 'white'
  },
  backgroundColor: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
a {
  font-weight: 600;
  display: block;
  width: 100%;
  height: 100%;
}

a:hover {
  background-color: transparent;
}

button {
  font-weight: 600;
}

.text-white {
  color: #fff;
}

.text-gray {
  color: #8b8b8b;
}

.text-primary {
  color: #6541b9;
}
</style>
