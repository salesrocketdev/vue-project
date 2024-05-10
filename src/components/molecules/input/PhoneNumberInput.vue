<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="'phone'"> Número de celular </BaseInputLabel>
      <BaseInput
        :id="'phone'"
        :type="'tel'"
        :placeholder="'e.g. (21) 97543-4411'"
        :mask-options="phoneMask"
        v-model="phoneNumber"
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

import { phoneMask } from '@/shared/mask/mask'

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const phoneNumber = ref()

watch(
  () => props.value,
  (newValue) => {
    phoneNumber.value = newValue
  }
)

onMounted(() => {
  phoneNumber.value = props.value
})
</script>
