<template>
  <li>
    <div class="flex items-center ms-2 text-sm">
      <FontAwesomeIcon
        :class="{
          'text-red-500': props.data.title == 'Sair da conta'
        }"
        class="text-gray-900 fa-md pr-4"
        :icon="props.data.icon"
      />

      <label
        :class="{
          'text-red-500': props.data.title == 'Sair da conta'
        }"
        class="text-left font-medium text-gray-900 dark:text-gray-300"
      >
        <div>{{ props.data.title }}</div>

        <p class="line-clamp-1 text-xs font-normal text-gray-500 dark:text-gray-300">
          {{ props.data.caption }}
        </p>
      </label>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

interface IProfileDropdownItem {
  icon: string
  title: string
  caption: string
}

const props = defineProps({
  data: {
    type: Object as PropType<IProfileDropdownItem>,
    required: true,
    default() {
      return {}
    }
  }
})
</script>

<style>
li:hover {
  filter: brightness(0.8);
}
</style>
