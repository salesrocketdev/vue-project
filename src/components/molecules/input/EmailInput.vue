<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="'email'" :label="'Email'" />
      <BaseInput
        :id="'email'"
        :type="'text'"
        :placeholder="'Insira seu email'"
        v-model="email"
        @update:model-value="emits('update:value', $event)"
      />

      <slot name="field-errors"></slot>
    </template>
  </BaseFieldContainer>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

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

const email = ref()

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
