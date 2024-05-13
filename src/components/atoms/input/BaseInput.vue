<template>
  <input
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    autocomplete="true"
    :id="props.id"
    :type="props.type"
    :placeholder="props.placeholder"
    v-model="inputValue"
    v-maskito="props.maskOptions ? props.maskOptions : null"
    :maxlength="props.maxLength"
    @input="emits('update:modelValue', $event.target ? inputValue : null)"
  />
</template>

<script setup lang="ts">
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
  },
  maskOptions: {
    type: Object,
    default() {
      return {}
    }
  }
})

const inputValue = defineModel()
</script>
