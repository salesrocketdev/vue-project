<template>
  <nav class="bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <router-link to="/" class="text-white font-regular text-xl">Meu Site</router-link>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/about"
              class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >Sobre</router-link
            >
            <router-link
              to="/services"
              class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >Serviços</router-link
            >
            <router-link
              to="/contact"
              class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >Contato</router-link
            >
          </div>
        </div>
        <div class="hidden md:block">
          <!-- Se houver lógica para mostrar itens adicionais quando o usuário estiver autenticado, você pode adicionar aqui -->
        </div>
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Icone do menu para dispositivos móveis (exemplo usando ícone de menu do HeroIcons) -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu, display on small screens -->
    <div :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/about"
          class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >Sobre</router-link
        >
        <router-link
          to="/services"
          class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >Serviços</router-link
        >
        <router-link
          to="/contact"
          class="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >Contato</router-link
        >
        <!-- Se houver lógica para mostrar itens adicionais quando o usuário estiver autenticado, você pode adicionar aqui -->
      </div>
    </div>
  </nav>

  <main>
    Home Page Works

    <div>
      {{ userStore.user }}
    </div>

    <form @submit.prevent="handleLogout()">
      <BaseButton :is-loading="isLoading" :type="'submit'">
        <span v-if="!isLoading"> Sair da minha conta </span>
        <span v-else> Desconectando... </span>
      </BaseButton>
    </form>
  </main>

  <ModalLoading v-if="isLoading" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useUserStore } from '@/stores/user.store'
import { useAuth } from '@/composables/useAuth'

import BaseButton from '@/components/atoms/button/BaseButton.vue'

import ModalLoading from '@/components/organisms/modal/ModalLoading.vue'

const userStore = useUserStore()

const { isLoading, logout } = useAuth()

const isMobileMenuOpen = ref(false)

const handleLogout = async () => {
  await logout()
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
