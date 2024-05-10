<template>
  <footer class="w-full z-10 border-t border-gray-200">
    <div class="max-w-screen-xl mx-auto px-1 py-2">
      <div class="flex justify-around">
        <BottomTabBarItem :label="'Explorer'" :icon="'compass'" route="/explore" />
        <BottomTabBarItem :label="'Alugueis'" :icon="'car'" route="/rental" />
        <BottomTabBarItem :label="'Favoritos'" :icon="'heart'" route="/favorite" />
        <BottomTabBarItem :label="'Perfil'" :icon="'user'" route="/profile" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import BottomTabBarItem from '@/components/atoms/layout/BottomTabBarItem.vue'
</script>

<style>
footer {
  position: fixed;
  bottom: 0px;
}
</style>
