<template>
  <section>
    <div class="flex justify-between items-center py-2 px-6">
      <h5 class="text-xl font-bold text-gray-900">Marcas</h5>

      <LabelButton :label="'Ver mais'" :text-color="'gray-600'" />
    </div>

    <div class="flex gap-x-4 px-6 py-4 overflow-x-scroll" style="scrollbar-width: none">
      <BrandCarouselItem v-for="brand in brands" :key="brand.id" :data="brand" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useBrand } from '@/composables/useBrand'

import LabelButton from '@/components/atoms/button/LabelButton.vue'

import BrandCarouselItem from '@/components/molecules/carousel/brand/BrandCarouselItem.vue'

const { brands, getAllBrands } = useBrand()

onMounted(async () => {
  await getAllBrands()
})
</script>
