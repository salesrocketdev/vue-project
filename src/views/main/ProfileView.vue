<template>
  <main>
    Profile Page Works

    <div class="break-all">
      {{ userStore.user }}
    </div>

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
import { useUserStore } from '@/stores/user.store'

import { useAuth } from '@/composables/useAuth'

import PrimaryButton from '@/components/atoms/button/PrimaryButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

const userStore = useUserStore()

const { isLoading, logout } = useAuth()

const handleLogout = async () => {
  await logout()
}
</script>
