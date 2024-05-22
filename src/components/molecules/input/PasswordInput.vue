<template>
  <BaseFieldContainer>
    <template v-slot:field-content>
      <BaseInputLabel :for="props.id"> {{ props.label }} </BaseInputLabel>
      <BaseInput
        :id="props.id"
        :type="isPassword ? 'password' : 'text'"
        :placeholder="'••••••••'"
        v-model="password"
        @update:model-value="emits('update:value', $event)"
      >
        <template v-slot:append-content>
          <button
            type="button"
            class="absolute top-0 end-0 p-3.5 rounded-e-md"
            @click="isPassword = !isPassword"
          >
            <svg
              class="flex-shrink-0 size-3.5 text-gray-300 dark:text-neutral-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path class="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
              <path
                class="hs-password-active:hidden"
                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
              />
              <path
                class="hs-password-active:hidden"
                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
              />

              <line
                :class="isPassword ? 'block' : 'hidden'"
                class="hs-password-active:hidden"
                x1="2"
                x2="22"
                y1="2"
                y2="22"
              ></line>
              <path
                class="hs-password-active:block"
                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
              />
              <circle class="hs-password-active:block" cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </template>
      </BaseInput>

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
  id: {
    type: String,
    default: 'id'
  },
  label: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  }
})

const password = ref()

const isPassword = ref(true)

watch(
  () => props.value,
  (newValue) => {
    password.value = newValue
  }
)

watch(
  () => isPassword.value,
  (newValue) => {
    console.log(newValue)
  }
)

onMounted(() => {
  password.value = props.value
})
</script>
