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
      :type="'number'"
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

    <GenericInput
      :field="'phone'"
      :label="'Número de celular'"
      :type="'tel'"
      :placeholder="'e.g. (21) 97543-4411'"
      :value="form.phone"
      @update:value="form.phone = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.phone.$error"
          :error-message="v$.phone.$errors ? v$.phone.$errors[0]?.$message : undefined"
        />
      </template>
    </GenericInput>

    <EmailInput :value="form.email" @update:value="form.email = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.email.$error"
          :error-message="v$.email.$errors ? v$.email.$errors[0]?.$message : undefined"
        />
      </template>
    </EmailInput>

    <GenericInput
      :field="'taxNumber'"
      :label="'CPF'"
      :placeholder="'e.g. 000.000.000-00'"
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
    </GenericInput>

    <GenericInput
      :field="'rg'"
      :label="'RG'"
      :placeholder="'e.g. 00000000-2'"
      :value="form.document.rg"
      @update:value="form.document.rg = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.document?.rg.$error"
          :error-message="v$.document.rg.$errors ? v$.document.rg.$errors[0]?.$message : undefined"
        />
      </template>
    </GenericInput>

    <GenericInput
      :field="'driverLicenseNumber'"
      :label="'CNH'"
      :placeholder="'e.g. 0000000000'"
      :value="form.document.driverLicenseNumber"
      @update:value="form.document.driverLicenseNumber = $event"
    >
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.document?.driverLicenseNumber.$error"
          :error-message="
            v$.document.driverLicenseNumber.$errors
              ? v$.document.driverLicenseNumber.$errors[0]?.$message
              : undefined
          "
        />
      </template>
    </GenericInput>

    <!-- <PostalCodeInput :value="form.postalCode" @update:value="form.postalCode = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.postalCode.$error"
          :error-message="v$.postalCode.$errors ? v$.postalCode.$errors[0]?.$message : undefined"
        />
      </template>
    </PostalCodeInput> -->

    <!-- <PasswordInput :value="form.password" @update:value="form.password = $event">
      <template v-slot:field-errors>
        <BaseInputErrorText
          v-if="v$.password.$error"
          :error-message="v$.password.$errors ? v$.password.$errors[0]?.$message : undefined"
        />
      </template>
    </PasswordInput> -->

    <div class="flex flex-col items-center mt-6 gap-y-2">
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
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'

import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, required, email, minValue } from '@vuelidate/validators'

import { useAuth } from '@/composables/useAuth'

import EmailInput from '@/components/molecules/input/EmailInput.vue'
import GenericInput from '@/components/molecules/input/GenericInput.vue'

import BaseInputErrorText from '@/components/atoms/text/BaseInputErrorText.vue'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'

import type { SignUpRequest } from '@/types/request/signUp.request'

const { signUp } = useAuth()

const form = reactive<SignUpRequest>({
  name: '',
  age: 0,
  phone: '',
  email: '',
  document: {
    taxNumber: '',
    rg: '',
    driverLicenseNumber: ''
  }
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
      minLength: minLength(12),
      maxLength: maxLength(12)
    },
    email: {
      required,
      email
    },
    document: {
      taxNumber: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11)
      },
      rg: {
        required,
        minLength: minLength(9),
        maxLength: maxLength(9)
      },
      driverLicenseNumber: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10)
      }
    }
  }
})

const handleSubmit = async () => {
  const result = await v$.value.$validate()

  if (!result) return

  await signUp(form)
}

const v$ = useVuelidate(rules, form)
</script>
