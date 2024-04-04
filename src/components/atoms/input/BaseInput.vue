<template>
  <input
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    :id="props.id"
    :type="props.type"
    :placeholder="props.placeholder"
    v-model="inputValue"
    :maxlength="props.maxLength"
    @input="emits('update:modelValue', $event.target ? inputValue : null)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  id: {
    type: String,
    default: 'id'
  },
  type: {
    type: String,
    default: 'text'
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
