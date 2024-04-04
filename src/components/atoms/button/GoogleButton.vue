<template>
  <button class="w-full h-12 px-6 border-2 border-gray-300 rounded-lg duration-300">
    <div class="relative flex items-center space-x-4 justify-center">
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        class="absolute left-0 w-5"
        alt="google logo"
      />
      <span
        class="block w-max font-semibold tracking-wide text-gray-700 dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base"
      >
        Continuar com Google
      </span>
    </div>
  </button>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background-color: #fff;
}

button:hover {
  filter: brightness(0.9);
}
</style>
