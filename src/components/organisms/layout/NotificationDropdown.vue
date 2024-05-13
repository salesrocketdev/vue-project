<template>
  <IconButton
    class="ms-auto -mx-1.5 -my-1.5"
    :icon="'bell'"
    @icon-button-click="toggleDropdown()"
  />

  <div
    id="notificationDropdown"
    :class="{
      hidden: !showDropdown,
      flex: showDropdown
    }"
    class="bg-white flex-col text-left divide-y divide-gray-100 rounded-md shadow-md w-60 dark:bg-gray-700 dark:divide-gray-600"
  >
    <div class="flex justify-between items-center py-2 px-4">
      <h5 class="text-md font-semibold text-gray-900">Últimas notificações</h5>

      <LabelButton :label="'Marcar como lido'" :text-color="'primary'" />
    </div>

    <ul
      class="p-3 space-y-4 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="notificationDropdownButton"
    >
      <li>
        <div class="flex items-center ms-2 text-sm">
          <FontAwesomeIcon class="text-gray-400 fa-md pr-4" icon="info-circle" />

          <label class="text-left font-medium text-gray-900 dark:text-gray-300">
            <div>Enable notifications</div>

            <div class="flex justify-between gap-x-4">
              <p class="line-clamp-1 text-xs font-normal text-gray-500 dark:text-gray-300">
                Some helpful instruction goes over...
              </p>

              <p class="text-xs font-normal text-gray-500 dark:text-gray-300">a moment ago</p>
            </div>
          </label>
        </div>
      </li>

      <li>
        <div class="flex items-center ms-2 text-sm">
          <FontAwesomeIcon class="text-gray-400 fa-md pr-4" icon="info-circle" />

          <label class="text-left font-medium text-gray-900 dark:text-gray-300">
            <div>Enable notifications</div>

            <div class="flex justify-between gap-x-4">
              <p class="line-clamp-1 text-xs font-normal text-gray-500 dark:text-gray-300">
                Some helpful instruction goes over...
              </p>

              <p class="text-xs font-normal text-gray-500 dark:text-gray-300">a moment ago</p>
            </div>
          </label>
        </div>
      </li>

      <li>
        <div class="flex items-center ms-2 text-sm">
          <FontAwesomeIcon class="text-gray-400 fa-md pr-4" icon="info-circle" />

          <label class="text-left font-medium text-gray-900 dark:text-gray-300">
            <div>Enable notifications</div>

            <div class="flex justify-between gap-x-4">
              <p class="line-clamp-1 text-xs font-normal text-gray-500 dark:text-gray-300">
                Some helpful instruction goes over...
              </p>

              <p class="text-xs font-normal text-gray-500 dark:text-gray-300">a moment ago</p>
            </div>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import IconButton from '@/components/atoms/button/IconButton.vue'

import LabelButton from '@/components/atoms/button/LabelButton.vue'

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<style scoped>
#notificationDropdown {
  position: absolute;
  right: 10px;
  top: 65px;

  min-width: 90%;
}

@media (min-width: 1024px) {
  #notificationDropdown {
    min-width: 60%;
  }
}
</style>
