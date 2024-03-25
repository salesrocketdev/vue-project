<template>
  <!-- <OnboardingNavBar /> -->

  <main
    class="container relative flex flex-col justify-between h-[75vh] max-w-2xl px-6 mx-auto xl:px-0"
  >
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>

  <OnboardingFooter class="mx-auto max-w-2xl" />
</template>

<script setup lang="ts">
import OnboardingFooter from '@/components/organisms/onboarding/OnboardingFooter.vue'
</script>

<style scoped>
@media (min-width: 1024px) {
  #app {
    background-color: red;
  }

  .container {
    margin-top: 60px;
  }
}
</style>
