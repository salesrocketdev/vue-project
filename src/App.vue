<template>
  <RouterView />

  <NegativeToast
    v-if="toastStore.isVisible"
    :message="toastStore.message"
    @close="toastStore.hide"
  />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useToastStore } from '@/stores/toast.store'

import NegativeToast from '@/components/molecules/toast/NegativeToast.vue'

const toastStore = useToastStore()
</script>

<style>
header,
nav,
body,
footer {
  background-color: #f9f9f9 !important;
}
</style>
