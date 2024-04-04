<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="props.field"> {{ props.label }} </BaseInputLabel>

      <BaseInput
        :id="props.field"
        :type="props.type"
        :placeholder="props.placeholder"
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
import BaseInputLabel from '@/components/atoms/text/BaseInputLabel.vue'

const emits = defineEmits(['update:value'])

const props = defineProps({
  label: {
    type: String,
    default: 'Input label'
  },
  field: {
    type: String,
    default: 'generic'
  },
  placeholder: {
    type: String,
    default: 'Some placeholder'
  },
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: [String, Number],
    default: ''
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
