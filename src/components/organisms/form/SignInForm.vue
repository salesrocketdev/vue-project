<template>
  <form @submit.prevent="handleSubmit">
    <EmailInput :value="form.email" @update:value="form.email = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.email.$error"
          :error-message="v$.email.$errors ? v$.email.$errors[0]?.$message : undefined"
        />
      </template>
    </EmailInput>

    <PasswordInput :value="form.password" @update:value="form.password = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.password.$error"
          :error-message="v$.password.$errors ? v$.password.$errors[0]?.$message : undefined"
        />
      </template>
    </PasswordInput>

    <PrimaryButton :label="'Sign in'" :type="'submit'" />
  </form>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email } from '@vuelidate/validators'

import EmailInput from '@/components/molecules/input/EmailInput.vue'
import PasswordInput from '@/components/molecules/input/PasswordInput.vue'

import BaseInputErrorText from '@/components/atoms/text/BaseInputErrorText.vue'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'
const form = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  }
})

const handleSubmit = async () => {
  const result = await v$.value.$validate()

  if (!result) return

  alert('Form submitted successfully')
}

const v$ = useVuelidate(rules, form)
</script>

<style>
form {
  width: 400px;
  margin: 0 auto;
  background-color: #f1f1f1;
  padding: 30px;
  border-radius: 20px;
}
</style>
