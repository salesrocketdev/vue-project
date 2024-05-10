<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        class="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
    </div>

    <input
      class="bg-gray-100 text-gray-900 ps-10 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
      autocomplete="true"
      :id="props.id"
      :type="'search'"
      :placeholder="props.placeholder"
      v-model="inputValue"
      :maxlength="props.maxLength"
      @input="emits('update:modelValue', $event.target ? inputValue : null)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  id: {
    type: String,
    default: 'id'
  },

  placeholder: {
    type: String,
    default: 'placeholder text'
  },
  maxLength: {
    type: String,
    default: '40'
  }
})

const inputValue = ref('')
</script>
