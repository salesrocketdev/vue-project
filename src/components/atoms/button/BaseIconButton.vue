<template>
  <button :class="buttonClasses" :type="props.type">
    <span>
      <FontAwesomeIcon class="fa-sm" :icon="props.icon" />
    </span>
  </button>
</template>

<script setup lang="ts">
// Define an interface for the props that the component will accept
interface IIconButtonProps {
  type?: 'button' // The type of the button (default is 'button')
  icon: string // The icon name to be displayed
  styleName?: 'outline' | 'primary' | 'secondary' // Optional prop to define the button style (default is 'primary')
  className?: string // Optional additional class names for custom styling
}

// Set default values for the props using `withDefaults` and `defineProps`
const props = withDefaults(defineProps<IIconButtonProps>(), {
  type: 'button',
  icon: '',
  styleName: 'primary',
  className: ''
})

// Define a styles object to map the styleName prop to corresponding class names
const styles: Record<string, string> = {
  outline: 'border-gray-300 bg-transparent text-primary-400', // Outline style
  primary: 'border-transparent bg-primary-400 text-white', // Primary style
  secondary: 'border-transparent bg-secondary-500 text-primary-400' // Secondary style
}

// Create an array of classes that the button will use
const buttonClasses = [
  'text-center inline-flex items-center px-4 py-2 duration-300 font-semibold tracking-wide text-sm transition', // Common classes
  styles[props.styleName], // Style-specific classes based on the styleName prop
  props.className // Any additional classes passed through the className prop
]
</script>
