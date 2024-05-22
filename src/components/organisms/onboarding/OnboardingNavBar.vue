<template>
  <header class="onboarding-navbar bg-violet-500 shadow">
    <!-- <LogoAtom />
    
      <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav> -->

    <div>
      <LabelButton :label="'Pular'" :text-color="'gray'" :route="'../auth/signIn'" />
    </div>
  </header>
</template>

<script setup lang="ts">
import LabelButton from '@/components/atoms/LabelButton.vue'
</script>

<style scoped>
.onboarding-navbar {
  display: flex;
  justify-content: end;
  padding: 0.6rem;
}

@media (min-width: 1024px) {
  .onboarding-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
