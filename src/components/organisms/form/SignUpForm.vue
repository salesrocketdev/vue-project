<template>
  <form @submit.prevent="handleSubmit">
    <GenericInput
      :field="'name'"
      :label="'Nome'"
      :placeholder="'e.g. Bonnie'"
      :value="form.name"
      @update:value="form.name = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.name.$error"
          :error-message="v$.name.$errors ? v$.name.$errors[0]?.$message : undefined"
        />
      </template>
    </GenericInput>

    <GenericInput
      :field="'age'"
      :label="'Idade'"
      :type="'tel'"
      :placeholder="'e.g. 23'"
      :value="form.age"
      @update:value="form.age = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.age.$error"
          :error-message="v$.age.$errors ? v$.age.$errors[0]?.$message : undefined"
        />
      </template>
    </GenericInput>

    <PhoneNumberInput :value="form.phone" @update:value="form.phone = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$?.phone.$error"
          :error-message="v$.phone.$errors ? v$.phone.$errors[0]?.$message : undefined"
        />
      </template>
    </PhoneNumberInput>

    <EmailInput :value="form.email" @update:value="form.email = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.email.$error"
          :error-message="v$.email.$errors ? v$.email.$errors[0]?.$message : undefined"
        />
      </template>
    </EmailInput>

    <TaxNumberInput
      :value="form.document.taxNumber"
      @update:value="form.document.taxNumber = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.document?.taxNumber.$error"
          :error-message="
            v$.document.taxNumber.$errors ? v$.document.taxNumber.$errors[0]?.$message : undefined
          "
        />
      </template>
    </TaxNumberInput>

    <!-- <PostalCodeInput :value="form.postalCode" @update:value="form.postalCode = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.postalCode.$error"
          :error-message="v$.postalCode.$errors ? v$.postalCode.$errors[0]?.$message : undefined"
        />
      </template>
    </PostalCodeInput> -->

    <PasswordInput
      :label="'Palavra-chave'"
      :id="'password'"
      :value="form.password"
      @update:value="form.password = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.password.$error"
          :error-message="v$.password.$errors ? v$.password.$errors[0]?.$message : undefined"
        />
      </template>
    </PasswordInput>

    <PasswordInput
      :label="'Confirmação de palavra-chave'"
      :id="'confirm-password'"
      :value="form.passwordConfirm"
      @update:value="form.passwordConfirm = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.passwordConfirm.$error"
          :error-message="
            v$.passwordConfirm.$errors ? v$.passwordConfirm.$errors[0]?.$message : undefined
          "
        />
      </template>
    </PasswordInput>

    <div class="flex flex-col items-center mt-4 gap-y-2">
      <PrimaryButton :type="'submit'">Criar conta</PrimaryButton>

      <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        Já possuí uma conta?

        <RouterLink
          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          to="signIn"
        >
          <strong> Acessar agora </strong>
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
import { minLength, maxLength, required, email, minValue } from '@vuelidate/validators'

import { useAuth } from '@/composables/useAuth'

import type { SignUpRequest } from '@/types/request/signUp'

import EmailInput from '@/components/molecules/input/EmailInput.vue'
import PhoneNumberInput from '@/components/molecules/input/PhoneNumberInput.vue'
import TaxNumberInput from '@/components/molecules/input/TaxNumberInput.vue'
import PasswordInput from '@/components/molecules/input/PasswordInput.vue'
import GenericInput from '@/components/molecules/input/GenericInput.vue'

import BaseInputErrorText from '@/components/atoms/text/BaseInputErrorText.vue'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

const router = useRouter()

const { isLoading, signUp } = useAuth()

const form = reactive<SignUpRequest>({
  name: '',
  age: 0,
  phone: '',
  email: '',
  document: {
    taxNumber: ''
  },
  password: '',
  passwordConfirm: ''
  // name: 'Caio Sales',
  // age: 23,
  // phone: '(02) 1 9797-2076',
  // email: 'caiofernandosales@outlook.com',
  // document: {
  //   taxNumber: '187.774.687-83'
  // }
})

const rules = computed(() => {
  return {
    name: {
      required,
      minLength: minLength(8)
    },
    age: {
      required,
      minValue: minValue(18)
    },
    phone: {
      required,
      minLength: minLength(15),
      maxLength: maxLength(16)
    },
    email: {
      required,
      email
    },
    document: {
      taxNumber: {
        required,
        minLength: minLength(14),
        maxLength: maxLength(14)
      }
    },
    password: {
      required,
      minLength: minLength(8)
    },
    passwordConfirm: {
      required,
      minLength: minLength(8)
    }
  }
})

const handleSubmit = async () => {
  const result = await v$.value.$validate()

  if (!result) return

  const response = await signUp(form)

  if (response) router.push({ name: 'sign-in' })
}

const v$ = useVuelidate(rules, form)
</script>
