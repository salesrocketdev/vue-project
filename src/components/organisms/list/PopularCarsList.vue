<template>
  <section class="mb-[80px]">
    <div class="flex justify-between items-center py-2 px-6">
      <h5 class="text-xl font-semibold text-gray-900">Mais populares</h5>
    </div>

    <div class="flex flex-col gap-y-8 px-6 py-4">
      <PopularCarsListItem
        v-for="car in cars"
        :key="car.id"
        :data="car"
        @car-item-click="handleCarClick(car.id)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useRouter } from 'vue-router'

import { useCar } from '@/composables/useCar'

import PopularCarsListItem from '@/components/molecules/list/PopularCarsListItem.vue'

const router = useRouter()

const { cars, getAllCars } = useCar()

const handleCarClick = (car_id: number) => {
  router.push({
    name: 'explore.details',
    query: { car_id: car_id }
  })
}

onMounted(async () => {
  await getAllCars()
})
</script>
