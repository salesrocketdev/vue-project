<template>
  <form @submit.prevent="handleSubmit()">
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
        <RouterLink
          class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          to="resetPassword"
        >
          Esqueceu sua senha?
        </RouterLink>
      </div>
    </div>

    <div class="flex flex-col items-center mt-4 gap-y-2">
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

import { useRouter } from 'vue-router'

import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email } from '@vuelidate/validators'

import type { SignInRequest } from '@/types/request/signIn'

import { useAuth } from '@/composables/useAuth'

import EmailInput from '@/components/molecules/input/EmailInput.vue'
import PasswordInput from '@/components/molecules/input/PasswordInput.vue'
import RememberPasswordInput from '@/components/molecules/input/RememberPasswordInput.vue'

import BaseInputErrorText from '@/components/atoms/text/BaseInputErrorText.vue'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'
import GoogleButton from '@/components/atoms/button/GoogleButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

const router = useRouter()

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

  const response = await signIn(form)

  if (response) router.push({ name: 'explore' })
}

const v$ = useVuelidate(rules, form)
</script>
