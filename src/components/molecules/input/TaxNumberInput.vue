<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="'tax-number'"> CPF </BaseInputLabel>
      <BaseInput
        :id="'tax-number'"
        :type="'text'"
        :placeholder="'000.000.000-00'"
        :mask-options="cpfMask"
        :max-length="'14'"
        v-model="taxNumber"
        @update:model-value="emits('update:value', $event)"
      />

      <slot name="field-errors"></slot>
    </template>
  </BaseFieldContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import BaseFieldContainer from '@/components/atoms/container/BaseFieldContainer.vue'
import BaseInputLabel from '@/components/atoms/text/BaseInputLabel.vue'
import BaseInput from '@/components/atoms/input/BaseInput.vue'

import { cpfMask } from '@/shared/mask/mask'

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const taxNumber = ref()

watch(
  () => props.value,
  (newValue) => {
    taxNumber.value = newValue
  }
)

onMounted(() => {
  taxNumber.value = props.value
})
</script>
