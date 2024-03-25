<template>
  <div class="field-container">
    <slot name="field-content"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
div.field-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
</style>
