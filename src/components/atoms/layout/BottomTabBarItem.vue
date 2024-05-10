<template>
  <RouterLink
    active-class="!text-purple-600"
    class="w-full text-gray-400 font-semibold"
    :to="props.route"
  >
    <li class="px-2 py-2 text-md duration-300">
      <span>
        <FontAwesomeIcon class="fa-sm" :icon="props.icon" />
      </span>
      <br />
      {{ props.label }}
    </li>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps({
  label: {
    type: String,
    default: 'Texto'
  },
  icon: {
    type: String,
    default: ''
  },
  route: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
}
</style>
