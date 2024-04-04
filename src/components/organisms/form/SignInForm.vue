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

    <div class="flex items-center justify-between">
      <RememberPasswordInput :value="form.remember" @update:value="form.remember = $event" />
      <div>
        <a
          href="#"
          class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Esqueceu sua senha?
        </a>
      </div>
    </div>

    <div class="flex flex-col items-center mt-6 gap-y-2">
      <PrimaryButton :is-loading="isLoading" :type="'submit'">
        <span v-if="!isLoading"> Acessar minha conta </span>
        <span v-else> Conectando... </span>
      </PrimaryButton>

      <p class="text-sm font-light text-gray-500 dark:text-gray-400">ou</p>

      <GoogleButton />

      <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        Ainda não possuí uma conta?

        <RouterLink
          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          to="signUp"
        >
          <strong> Crie uma agora </strong>
        </RouterLink>
      </p>
    </div>
  </form>

  <ModalLoading v-if="isLoading" />
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email } from '@vuelidate/validators'

import { useAuth } from '@/composables/useAuth'

import EmailInput from '@/components/molecules/input/EmailInput.vue'
import PasswordInput from '@/components/molecules/input/PasswordInput.vue'
import RememberPasswordInput from '@/components/molecules/input/RememberPasswordInput.vue'

import BaseInputErrorText from '@/components/atoms/text/BaseInputErrorText.vue'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'
import GoogleButton from '@/components/atoms/button/GoogleButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

import type { SignInRequest } from '@/types/request/signIn.request'

const { isLoading, signIn } = useAuth()

const form = reactive<SignInRequest>({
  email: '',
  password: '',
  remember: false
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

  await signIn(form)
}

const v$ = useVuelidate(rules, form)
</script>
