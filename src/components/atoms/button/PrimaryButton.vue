<template>
  <button class="rounded-lg w-full p-3 duration-300" :type="props.type">
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
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  }
})
</script>

<style scoped>
button {
  background-color: #8760e0;
  color: #fff;
  font-weight: 600;
}

button:hover {
  filter: brightness(0.9);
}
</style>
