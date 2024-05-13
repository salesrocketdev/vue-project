<template>
  <div
    class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-purple-600 rounded-lg"
    @click="toggleDropdown()"
    id="profileDropdownButton"
    data-dropdown-toggle="profileDropdown"
  >
    <span class="font-medium text-white">CS</span>
  </div>

  <div
    id="profileDropdown"
    :class="{
      hidden: !showDropdown,
      flex: showDropdown
    }"
    class="bg-white flex-col text-left divide-y divide-gray-100 rounded-md shadow-md w-60 dark:bg-gray-700 dark:divide-gray-600"
  >
    <div class="flex justify-between items-center py-2 px-4">
      <div
        class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-purple-600 rounded-lg"
        @click="toggleDropdown()"
      >
        <span class="font-medium text-white">CS</span>
      </div>

      <div class="ml-2">
        <h5 class="text-lg font-semibold text-gray-900">Caio Sales</h5>
        <p class="text-sm font-light text-gray-900">caiofernandosales@outlook.com</p>
      </div>

      <div class="ml-auto">
        <LabelButton :label="'Ver perfil'" :text-color="'primary'" />
      </div>
    </div>

    <ul
      class="p-3 space-y-4 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="profileDropdownButton"
      v-for="item in profileDropdownItem"
      :key="item.title"
    >
      <ProfileDropdownItem :data="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import LabelButton from '@/components/atoms/button/LabelButton.vue'

import ProfileDropdownItem from '@/components/molecules/list/ProfileDropdownItem.vue'

interface IProfileDropdownItem {
  icon: string
  title: string
  caption: string
}

const profileDropdownItem: IProfileDropdownItem[] = [
  {
    icon: 'info-circle',
    title: 'Minha conta',
    caption: 'Gerencie dados e preferências'
  },
  {
    icon: 'gear',
    title: 'Configurações',
    caption: 'Personalize suas preferências'
  },
  {
    icon: 'sign-out',
    title: 'Sair da conta',
    caption: ''
  }
]

const showDropdown = ref(false)

const toggleDropdown = () => (showDropdown.value = !showDropdown.value)

const handleClickOutside = (event: MouseEvent) => {
  const dropdownButton = document.getElementById('profileDropdownButton')
  const dropdown = document.getElementById('profileDropdown')

  if (!dropdownButton || !dropdown) return

  if (!dropdownButton.contains(event.target as Node) && !dropdown.contains(event.target as Node)) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
#profileDropdown {
  position: absolute;
  right: 10px;
  top: 65px;

  min-width: 90%;
}

@media (min-width: 1024px) {
  #profileDropdown {
    min-width: 60%;
  }
}
</style>
