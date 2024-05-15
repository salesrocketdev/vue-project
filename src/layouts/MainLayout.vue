<template>
  <NavBar />

  <main class="container relative mt-[80px] flex flex-col h-[75vh] max-w-4xl mx-auto xl:px-0">
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </main>

  <BottomTabBar class="md:invisible" />
</template>

<script setup lang="ts">
import NavBar from '@/components/organisms/layout/NavBar.vue'
import BottomTabBar from '@/components/organisms/layout/BottomTabBar.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
  #app {
    background-color: red;
  }

  .container {
    margin-top: 60px;
    margin-left: 190px;
  }
}
</style>
