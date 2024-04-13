<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInput
        :type="'number'"
        :placeholder="''"
        :maxLength="'1'"
        v-model="inputValue"
        @update:model-value="handleInputUpdate($event)"
      />

      <slot name="field-errors"></slot>
    </template>
  </BaseFieldContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue'

import BaseFieldContainer from '@/components/atoms/container/BaseFieldContainer.vue'
import BaseInput from '@/components/atoms/input/BaseInput.vue'

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: [String, Number],
    default: 0
  }
})

const inputValue = ref(props.value)

const handleInputUpdate = (newValue: string) => {
  emits('update:value', newValue)
}

watch(
  () => props.value,
  (newValue) => {
    inputValue.value = newValue
  }
)

onMounted(() => {
  inputValue.value = props.value
})
</script>
