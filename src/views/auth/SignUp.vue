<template>
  <div class="flex flex items-center justify-center mx-auto">
    <div class="w-4/6 hidden lg:block">
      <img
        src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>

    <div class="w-full lg:w-2/6">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-2xl font-black text-gray-900 md:text-2xl">Que tal criar uma conta?</h1>

        <h6 class="text-lg font-medium text-gray-500 md:text-2xl">
          <span> Opa, bem vindo! </span>
          <br />
          <span>Crie sua conta em segundos.</span>
        </h6>
      </div>

      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <SignUpForm />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SignUpForm from '@/components/organisms/form/SignUpForm.vue'
</script>
