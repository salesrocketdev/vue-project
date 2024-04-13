<template>
  <div>
    <VerificationCodeInput v-for="(input, index) in inputs" :key="index" :value="inputs[index]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import VerificationCodeInput from '@/components/molecules/input/VerificationCodeInput.vue'

const inputs = ref(['', '', '', '', ''])
</script>
