<template>
  <BaseFieldContainer class="!mb-0">
    <template v-slot:field-content>
      <div class="flex items-center">
        <BaseInput
          class="!w-auto mb-0"
          :id="'remember'"
          :type="'checkbox'"
          v-model="remember"
          @update:model-value="emits('update:value', $event)"
        />
        <BaseInputLabel class="w-full ml-2 !mb-0" :for="'remember'"> Lembrar </BaseInputLabel>
      </div>
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
    type: Boolean,
    default: false
  }
})

const remember = ref()

watch(
  () => props.value,
  (newValue) => {
    remember.value = newValue
  }
)

onMounted(() => {
  remember.value = props.value
})
</script>
