<template>
  <button class="rounded-lg w-full p-3 duration-300">
    <span>
      {{ props.label }}
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Texto'
  }
})
</script>

<style scoped>
button {
  background-color: #e8e8ed;
  color: #8760e0;
  font-weight: 600;
}

button:hover {
  filter: brightness(0.9);
}
</style>
