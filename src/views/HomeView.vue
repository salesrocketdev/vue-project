<template>
  <main>
    Home Page Works

    <form @submit.prevent="handleLogout()">
      <PrimaryButton :is-loading="isLoading" :type="'submit'">
        <span v-if="!isLoading"> Sair da minha conta </span>
        <span v-else> Desconectando... </span>
      </PrimaryButton>
    </form>
  </main>

  <ModalLoading v-if="isLoading" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useAuth } from '@/composables/useAuth'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

const router = useRouter()

const { isLoading, logout } = useAuth()

const handleLogout = async () => {
  const response = await logout()

  if (response) router.push({ name: 'sign-in' })
}
</script>
