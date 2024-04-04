<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="'postal-code'"> CEP </BaseInputLabel>
      <BaseInput
        :id="'postal-code'"
        :type="'text'"
        :placeholder="'000000-000'"
        v-model="postalCode"
        :max-length="'8'"
        @update:model-value="emits('update:value', $event)"
      />

      <slot name="field-errors"></slot>
    </template>
  </BaseFieldContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { viaCepService } from '@/services'

import BaseFieldContainer from '@/components/atoms/container/BaseFieldContainer.vue'
import BaseInputLabel from '@/components/atoms/text/BaseInputLabel.vue'
import BaseInput from '@/components/atoms/input/BaseInput.vue'

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const postalCode = ref()

watch(
  () => props.value,
  (newValue) => {
    postalCode.value = newValue
  }
)

watch(
  () => postalCode.value,
  (newValue) => {
    if (newValue.length > 7) viaCepService.fetchAddressByCEP(newValue)
  }
)

onMounted(() => {
  postalCode.value = props.value
})
</script>
@/services/viaCep.service
