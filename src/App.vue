<template>
  <RouterView />

  <NegativeToast v-if="toast.isVisible" :message="toast.message" @close="toast.hide" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useToastStore } from '@/stores/toast.store'

import NegativeToast from '@/components/molecules/toast/NegativeToast.vue'

const toast = useToastStore()
</script>

<style scoped></style>
