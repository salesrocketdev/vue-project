<template>
  <section class="flex flex-col w-6/6 justify-center items-center text-center h-full">
    <img
      class="mb-2"
      width="200"
      height="200"
      src="@/assets/svg/step3-ilustration.svg"
      alt="Ilustração de onboarding 3"
    />

    <h2 class="mb-2 text-xl font-extrabold text-violet-500">
      <span>E ai?</span>
      <br />
      <span>"Vamo fecha"?</span>
    </h2>

    <p class="text-sm mb-4 text-gray-900">
      <span>
        Cria uma conta aí... Ou dá uma olhadinha rápida e sem compromisso nos nossos produtos
      </span>
    </p>

    <div class="flex flex-col gap-y-2 w-full my-4">
      <PrimaryButton :label="'Dar uma olhadinha'" />
      <SecondaryButton :label="'Criar uma conta'" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/atoms/PrimaryButton.vue'
import SecondaryButton from '@/components/atoms/SecondaryButton.vue'
</script>
