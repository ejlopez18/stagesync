<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  sub?: string
  variant?: 'default' | 'ink' | 'mustard'
}>()
</script>

<template>
  <v-card
    :color="variant === 'ink' ? 'secondary' : variant === 'mustard' ? 'primary' : 'surface'"
    rounded="xl"
    elevation="0"
    class="bento-card h-100"
    :style="variant === 'default' || !variant ? 'border:1px solid rgba(0,0,0,0.08)' : ''"
  >
    <v-card-text class="pa-5 d-flex flex-column ga-2">
      <span
        class="label"
        :style="variant === 'ink' ? 'color:rgba(255,255,255,0.45)' : variant === 'mustard' ? 'color:rgba(0,0,0,0.5)' : ''"
      >
        {{ label }}
      </span>
      <span
        :style="{
          fontSize: '28px',
          fontWeight: '700',
          letterSpacing: '-0.02em',
          lineHeight: '1',
          color: variant === 'ink' ? '#FFFFFF' : '#0A0A0A',
        }"
      >
        {{ value }}
      </span>
      <span
        v-if="sub"
        style="font-size:12px"
        :style="variant === 'ink' ? 'color:rgba(255,255,255,0.4)' : 'color:rgba(0,0,0,0.4)'"
      >
        {{ sub }}
      </span>
    </v-card-text>
  </v-card>
</template>
