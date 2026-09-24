<script setup lang="ts">
import AppBadge from '@/components/common/AppBadge.vue'
import type { BadgeStatus } from '@/types'

const shows = [
  { date: 'Oct 04', venue: 'Palladium', tech: 'confirmed' as BadgeStatus, hosp: 'confirmed' as BadgeStatus },
  { date: 'Oct 09', venue: 'House of Blues', tech: 'confirmed' as BadgeStatus, hosp: 'pending' as BadgeStatus },
  { date: 'Oct 14', venue: 'Webster Hall', tech: 'pending' as BadgeStatus, hosp: 'pending' as BadgeStatus },
  { date: 'Oct 19', venue: 'Showbox', tech: 'hold' as BadgeStatus, hosp: 'hold' as BadgeStatus },
]
</script>

<template>
  <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)" class="h-100">
    <div class="px-5 pt-4 pb-3">
      <span style="font-size:13px;font-weight:600">Rider Summary</span>
    </div>
    <v-divider />
    <div class="px-4 py-2 d-flex" style="background:rgba(0,0,0,0.02)">
      <span class="label" style="flex:2">Show</span>
      <span class="label text-center" style="flex:1">Tech</span>
      <span class="label text-center" style="flex:1">Hosp</span>
    </div>
    <v-divider />
    <div
      v-for="show in shows"
      :key="show.date"
      class="ss-table-row px-4 py-3 d-flex align-center"
    >
      <div style="flex:2">
        <div style="font-size:13px;font-weight:500">{{ show.venue }}</div>
        <div class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.4)">{{ show.date }}</div>
      </div>
      <div class="d-flex justify-center" style="flex:1">
        <AppBadge :status="show.tech" />
      </div>
      <div class="d-flex justify-center" style="flex:1">
        <AppBadge :status="show.hosp" />
      </div>
    </div>
  </v-card>
</template>
