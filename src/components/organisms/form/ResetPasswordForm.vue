<template>
  <form v-if="step == 0" @submit.prevent="handleSubmitEmail()">
    <EmailInput :value="form.email" @update:value="form.email = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.email.$error"
          :error-message="v$.email.$errors ? v$.email.$errors[0]?.$message : undefined"
        />
      </template>
    </EmailInput>

    <div class="flex flex-col items-center mt-4 gap-y-2">
      <BaseButton :is-loading="isLoading" :type="'submit'">
        <span v-if="!isLoading"> Enviar email </span>
        <span v-else> Enviando... </span>
      </BaseButton>
    </div>
  </form>

  <form v-if="step == 1" @submit.prevent="handleSubmitCode()">
    <VerificationCodeForm />

    <div class="flex flex-col items-center mt-4 gap-y-2">
      <BaseButton :is-loading="isLoading" :type="'submit'">
        <span v-if="!isLoading"> Validar código </span>
        <span v-else> Validando... </span>
      </BaseButton>
    </div>
  </form>

  <ModalLoading v-if="isLoading" />
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import { useAuth } from '@/composables/useAuth'

import EmailInput from '@/components/molecules/input/EmailInput.vue'
import VerificationCodeForm from '@/components/molecules/form/VerificationCodeForm.vue'

import BaseInputErrorText from '@/components/atoms/text/BaseInputErrorText.vue'

import BaseButton from '@/components/atoms/button/BaseButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

const { isLoading } = useAuth()

const step = ref(0)

const form = reactive({
  email: ''
})

const rules = computed(() => {
  return {
    email: {
      required,
      email
    }
  }
})

const handleSubmitEmail = async () => {
  const result = await v$.value.$validate()

  if (!result) return
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)

  step.value = +1
}

const handleSubmitCode = async () => {
  const result = await v$.value.$validate()

  if (!result) return
}

const v$ = useVuelidate(rules, form)
</script>
