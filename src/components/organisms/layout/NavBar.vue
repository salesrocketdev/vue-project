<template>
  <header class="md:px-6 md:pt-2 md:pb-8">
    <nav class="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center mr-4 space-x-3 rtl:space-x-reverse">
          <img src="@/assets/logo.svg" alt="Logo" />
        </a>

        <!-- <IconButton class="-mx-1.5 -my-1.5" :icon="'bars'" @icon-button-click="toggleNavbar()" /> -->

        <h5 class="text-lg font-bold text-gray-900">{{ route.meta.title }}</h5>

        <div class="flex ml-auto md:order-2 space-x-3 rtl:space-x-reverse">
          <NotificationDropdown />
          <ProfileDropdown />
        </div>

        <nav
          :class="{ hidden: !showMenu, flex: showMenu }"
          class="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col w-full p-4 md:p-0 mt-4 md:flex-row md:mt-0 md:border-0">
            <NavLink :label="'Explorar'" :route="'/explore'" />
            <NavLink :label="'Favoritos'" :route="'/favorite'" />
          </ul>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useRoute } from 'vue-router'

import NavLink from '@/components/atoms/layout/NavLink.vue'

import NotificationDropdown from '@/components/organisms/layout/NotificationDropdown.vue'
import ProfileDropdown from '@/components/organisms/layout/ProfileDropdown.vue'

const route = useRoute()

const showMenu = ref(false)

const toggleNavbar = () => {
  showMenu.value = !showMenu.value
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

img {
  width: 30px;
}

nav {
  text-align: center;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
}

nav ul li,
nav ul li a {
  min-width: 120px;
}
</style>
