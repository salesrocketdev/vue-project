<template>
  <button
    type="button"
    class="text-white px-4 py-2 text-center inline-flex items-center duration-300"
    @click="emits('icon-button-click')"
  >
    <span>
      <FontAwesomeIcon class="fa-sm" :icon="props.icon" />
    </span>
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['icon-button-click'])

const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
button {
  color: #2a2a2a;
  font-weight: 600;
}

button:hover {
  filter: brightness(0.9);
}
</style>
