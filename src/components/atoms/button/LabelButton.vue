<template>
  <button :class="buttonClasses">
    <RouterLink :class="linkClasses" :to="props.route">
      {{ props.label }}
    </RouterLink>
  </button>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

// Define an interface for the props
interface ILabelButton {
  label: string
  route: string
  textColor: 'white' | 'gray' | 'primary' | string
  backgroundColor?: string
}

// Define the props for the component and set default values
const props = withDefaults(defineProps<ILabelButton>(), {
  label: 'Texto',
  route: '/',
  textColor: 'primary',
  backgroundColor: 'transparent'
})

// Define a styles object to map the textColor prop to corresponding class names
const styles: Record<string, string> = {
  gray: 'text-gray-400',
  primary: 'text-primary-400'
}

// Create an array of classes for the button element
const buttonClasses = [
  `bg-${props.backgroundColor}`, // Dynamic background color class
  'font-regular w-auto h-full' // Common classes
]

// Create an array of classes for the RouterLink element
const linkClasses = [
  styles[props.textColor] || `text-${props.textColor}`, // Dynamic text color class
  'text-sm font-regular block w-full h-full' // Common classes
]
</script>
