<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="'password'" :label="'Senha'" />
      <BaseInput
        :id="'password'"
        :type="'password'"
        :placeholder="'Insira sua senha'"
        v-model="password"
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

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const password = ref()

watch(
  () => props.value,
  (newValue) => {
    password.value = newValue
  }
)

onMounted(() => {
  password.value = props.value
})
</script>
