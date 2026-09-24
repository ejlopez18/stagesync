<script setup lang="ts">
import type { BadgeStatus } from '@/types'

defineProps<{ status: BadgeStatus }>()

const config: Record<BadgeStatus, { label: string; color: string }> = {
  confirmed: { label: 'Confirmed', color: 'success' },
  pending:   { label: 'Pending',   color: 'warning' },
  hold:      { label: 'Hold',      color: 'secondary' },
  rejected:  { label: 'Rejected',  color: 'error' },
}
</script>

<template>
  <v-chip
    :color="config[status].color"
    variant="tonal"
    size="x-small"
    rounded="lg"
    style="font-size:11px;font-weight:500;letter-spacing:0.04em;text-transform:uppercase"
  >
    {{ config[status].label }}
  </v-chip>
</template>
