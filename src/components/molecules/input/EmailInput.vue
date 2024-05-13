<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="'email'"> Email </BaseInputLabel>

      <BaseInput
        :id="'email'"
        :type="'text'"
        :placeholder="'email@dominio.com'"
        v-model="email"
        @update:model-value="emits('update:value', $event)"
      />

      <slot name="field-errors"></slot>
    </template>
  </BaseFieldContainer>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'

import BaseFieldContainer from '@/components/atoms/container/BaseFieldContainer.vue'
import BaseInput from '@/components/atoms/input/BaseInput.vue'
import BaseInputLabel from '@/components/atoms/text/BaseInputLabel.vue'

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const email = defineModel()

watch(
  () => props.value,
  (newValue) => {
    email.value = newValue
  }
)

onMounted(() => {
  email.value = props.value
})
</script>
