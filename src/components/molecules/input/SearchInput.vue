<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseSearchInput
        :id="props.field"
        :placeholder="props.placeholder"
        v-model="inputValue"
        @update:model-value="handleInputUpdate($event)"
      />
    </template>
  </BaseFieldContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue'

import BaseFieldContainer from '@/components/atoms/container/BaseFieldContainer.vue'
import BaseSearchInput from '@/components/atoms/input/BaseSearchInput.vue'

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

<style scoped>
div.field-container {
  margin-bottom: 0px;
}
</style>
