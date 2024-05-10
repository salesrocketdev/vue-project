<template>
  <div class="c-header">
    <form @submit.prevent="handleSubmit()">
      <div class="w-full flex items-center space-x-3">
        <SearchInput
          class="w-full"
          :placeholder="'Qual carro você procura?'"
          :value="form.search"
          @update:value="form.search = $event"
        />

        <IconButton class="-mx-1.5 -my-1.5" :icon="'filter'" />
      </div>
    </form>
  </div>

  <div class="c-main">
    <BrandCarousel />
    <PopularCarsList />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import SearchInput from '@/components/molecules/input/SearchInput.vue'

import IconButton from '@/components/atoms/button/IconButton.vue'

import BrandCarousel from '@/components/organisms/carousel/BrandCarousel.vue'
import PopularCarsList from '@/components/organisms/list/PopularCarsList.vue'

const form = reactive({
  search: ''
})

const handleSubmit = async () => {
  console.log(form)
}
</script>

<style>
.c-header {
  padding: 0.5rem 1rem;
}
</style>
