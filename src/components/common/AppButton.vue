<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md'
}>()

const colorMap = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'error',
  ghost: undefined,
}

const variantMap = {
  primary: 'flat',
  secondary: 'outlined',
  danger: 'flat',
  ghost: 'text',
}
</script>

<template>
  <v-btn
    :color="colorMap[variant ?? 'primary']"
    :variant="(variantMap[variant ?? 'primary'] as any)"
    :size="size === 'sm' ? 'small' : 'default'"
    rounded="lg"
    elevation="0"
  >
    <slot />
  </v-btn>
</template>
