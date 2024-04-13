<template>
  <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
    <div class="w-full">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-2xl font-black text-gray-900 md:text-2xl">Recuperar senha</h1>

        <h6 class="text-lg font-medium text-gray-500 md:text-2xl">
          <span>
            Informe o endereço de email associado a sua conta e enviaremos um código de confirmação
            para seu email.
          </span>
        </h6>
      </div>

      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <ResetPasswordForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ResetPasswordForm from '@/components/organisms/form/ResetPasswordForm.vue'
</script>
