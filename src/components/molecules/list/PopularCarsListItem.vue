<template>
  <div class="w-full bg-white py-4 text-center rounded-[1rem] shadow" @click="handleEmitCarClick()">
    <div class="flex pb-4">
      <div class="px-4 pb-4 text-center">
        <h5 class="text-lg font-semibold text-gray-900">
          {{ props.data.brand.name }}
          {{ props.data.model }}
        </h5>
      </div>

      <img
        class="relative px-2 py-2 mt-[-40px] ml-auto mr-[-20px]"
        :src="props.data.carImages.find((image) => image.isPrimary)?.link"
        alt="Car ilustration"
        width="200"
        height="200"
      />
    </div>

    <div class="grid grid-cols-3 divide-x px-6 pb-8 text-gray-400">
      <div>{{ transmissionTypeMap[props.data.transmissionType] }}</div>
      <div>{{ props.data.seatsNumber }} lugares</div>
      <div>{{ fuelTypeMap[props.data.fuelType] }}</div>
    </div>

    <div class="px-6">
      <BaseButton :type="'button'"> Alugar agora </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

import type { Car } from '@/types/response/car.response'

import { FuelType, TransmissionType } from '@/enums'

import BaseButton from '@/components/atoms/button/BaseButton.vue'

const emits = defineEmits(['car-item-click'])

const props = defineProps({
  data: {
    type: Object as PropType<Car>,
    required: true,
    default() {
      return {}
    }
  }
})

const transmissionTypeMap = computed(() => {
  return {
    [TransmissionType.Automatic]: 'Automático',
    [TransmissionType.Manual]: 'Manual'
  }
})

const fuelTypeMap = computed(() => {
  return {
    [FuelType.Diesel]: 'Diesel',
    [FuelType.Ethanol]: 'EtAnol',
    [FuelType.Gas]: 'GNV',
    [FuelType.Gasoline]: 'Gasolina'
  }
})

const handleEmitCarClick = () => emits('car-item-click')
</script>
