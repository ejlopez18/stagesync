<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
import AppBadge from '@/components/common/AppBadge.vue'
import AppButton from '@/components/common/AppButton.vue'
import BarCard from '@/components/dashboard/BarCard.vue'
import TicketsCard from '@/components/dashboard/TicketsCard.vue'
import type { BadgeStatus } from '@/types'

const inquiries = [
  { artist: 'Hollow Vein', agent: 'Marcy Druell', date: 'Dec 01', guarantee: '$5,500', status: 'pending' as BadgeStatus },
  { artist: 'Pale Circuit', agent: 'Jett Navarro', date: 'Dec 08', guarantee: '$3,000', status: 'pending' as BadgeStatus },
  { artist: 'Slow Return', agent: 'Dana Wu', date: 'Dec 14', guarantee: '$2,200', status: 'hold' as BadgeStatus },
]

const riderInbox = [
  { artist: 'Iron Lung Theory', type: 'Technical', received: 'Sep 18', status: 'pending' as BadgeStatus },
  { artist: 'Iron Lung Theory', type: 'Hospitality', received: 'Sep 18', status: 'confirmed' as BadgeStatus },
  { artist: 'The Fault Lines', type: 'Technical', received: 'Sep 20', status: 'pending' as BadgeStatus },
]
</script>

<template>
  <div class="d-flex flex-column ga-3">
    <v-row dense>
      <v-col cols="3"><StatCard variant="ink" label="Bar Revenue" value="$7,566" sub="Last show" /></v-col>
      <v-col cols="3"><StatCard label="Shows This Month" value="6" sub="Oct 2026" /></v-col>
      <v-col cols="3"><StatCard label="Avg Capacity" value="74%" sub="Last 90 days" /></v-col>
      <v-col cols="3"><StatCard variant="mustard" label="Open Inquiries" value="3" sub="Needs response" /></v-col>
    </v-row>

    <v-row dense>
      <v-col cols="8">
        <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
          <div class="px-5 py-3">
            <span style="font-size:13px;font-weight:600">Incoming Inquiries</span>
          </div>
          <v-divider />
          <div
            v-for="i in inquiries"
            :key="i.artist"
            class="ss-table-row px-5 py-3"
          >
            <div class="d-flex align-start justify-space-between mb-2">
              <div>
                <div style="font-size:13px;font-weight:500">{{ i.artist }}</div>
                <div style="font-size:12px;color:rgba(0,0,0,0.4)">{{ i.agent }} &mdash; {{ i.date }}</div>
              </div>
              <div class="d-flex align-center ga-2">
                <span class="value-mono" style="font-size:13px;font-weight:600">{{ i.guarantee }}</span>
                <AppBadge :status="i.status" />
              </div>
            </div>
            <div class="d-flex ga-2">
              <AppButton variant="primary" size="sm">Confirm</AppButton>
              <AppButton variant="secondary" size="sm">Counter</AppButton>
              <AppButton variant="danger" size="sm">Pass</AppButton>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)" class="h-100">
          <div class="px-5 py-3">
            <span style="font-size:13px;font-weight:600">Rider Inbox</span>
          </div>
          <v-divider />
          <div
            v-for="rider in riderInbox"
            :key="rider.artist + rider.type"
            class="ss-table-row px-5 py-3"
          >
            <div style="font-size:13px;font-weight:500">{{ rider.artist }}</div>
            <div style="font-size:12px;color:rgba(0,0,0,0.4)" class="mb-2">{{ rider.type }} · {{ rider.received }}</div>
            <div class="d-flex align-center ga-2">
              <AppBadge :status="rider.status" />
              <AppButton variant="ghost" size="sm">Review</AppButton>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="6"><BarCard /></v-col>
      <v-col cols="6"><TicketsCard /></v-col>
    </v-row>
  </div>
</template>
