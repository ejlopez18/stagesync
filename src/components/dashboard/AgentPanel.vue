<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
import AppBadge from '@/components/common/AppBadge.vue'
import AppButton from '@/components/common/AppButton.vue'
import type { BadgeStatus } from '@/types'

const pipeline = [
  { artist: 'Hollow Vein', venue: 'Bowery Ballroom', city: 'New York, NY', date: 'Nov 03', guarantee: '$6,000', status: 'confirmed' as BadgeStatus },
  { artist: 'Dead Letter Co.', venue: 'Bottom of the Hill', city: 'San Francisco, CA', date: 'Nov 11', guarantee: '$3,200', status: 'pending' as BadgeStatus },
  { artist: 'Cinder Static', venue: 'Grog Shop', city: 'Cleveland, OH', date: 'Nov 18', guarantee: '$2,000', status: 'hold' as BadgeStatus },
  { artist: 'Hollow Vein', venue: 'Roxy Theatre', city: 'West Hollywood, CA', date: 'Dec 01', guarantee: '$5,500', status: 'pending' as BadgeStatus },
  { artist: "The Fault Lines", venue: "Cat's Cradle", city: 'Carrboro, NC', date: 'Dec 07', guarantee: '$1,800', status: 'rejected' as BadgeStatus },
]

const roster = [
  { name: 'Hollow Vein', upcoming: 12, status: 'On Tour' },
  { name: 'Dead Letter Co.', upcoming: 4, status: 'Routing' },
  { name: 'Cinder Static', upcoming: 1, status: 'Hold' },
  { name: 'The Fault Lines', upcoming: 0, status: 'Off Cycle' },
]
</script>

<template>
  <div class="d-flex flex-column ga-3">
    <v-row dense>
      <v-col cols="3"><StatCard variant="ink" label="Est. Commission" value="$8,740" sub="Oct–Dec" /></v-col>
      <v-col cols="3"><StatCard label="Active Deals" value="11" sub="Across all artists" /></v-col>
      <v-col cols="3"><StatCard label="Confirmed" value="6" sub="This quarter" /></v-col>
      <v-col cols="3"><StatCard variant="mustard" label="Pending Offers" value="3" sub="Awaiting venue" /></v-col>
    </v-row>

    <!-- Pipeline table -->
    <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
      <div class="d-flex align-center justify-space-between px-5 py-3">
        <span style="font-size:13px;font-weight:600">Deal Pipeline</span>
        <AppButton variant="primary" size="sm">New Offer</AppButton>
      </div>
      <v-divider />
      <v-table density="comfortable">
        <thead>
          <tr style="background:rgba(0,0,0,0.02)">
            <th class="label">Artist</th>
            <th class="label">Venue</th>
            <th class="label">Date</th>
            <th class="label text-right">Guarantee</th>
            <th class="label">Status</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr v-for="deal in pipeline" :key="deal.artist + deal.date" class="ss-table-row">
            <td style="font-size:13px;font-weight:500">{{ deal.artist }}</td>
            <td>
              <div style="font-size:13px">{{ deal.venue }}</div>
              <div style="font-size:11px;color:rgba(0,0,0,0.4)">{{ deal.city }}</div>
            </td>
            <td class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.5)">{{ deal.date }}</td>
            <td class="value-mono text-right" style="font-size:13px;font-weight:500">{{ deal.guarantee }}</td>
            <td><AppBadge :status="deal.status" /></td>
            <td><AppButton variant="ghost" size="sm">View</AppButton></td>
          </tr>
        </tbody>
      </v-table>
    </v-card>

    <v-row dense>
      <v-col cols="7">
        <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
          <div class="px-5 py-3">
            <span style="font-size:13px;font-weight:600">Roster</span>
          </div>
          <v-divider />
          <div
            v-for="artist in roster"
            :key="artist.name"
            class="ss-table-row d-flex align-center justify-space-between px-5 py-3"
          >
            <div>
              <div style="font-size:13px;font-weight:500">{{ artist.name }}</div>
              <div style="font-size:12px;color:rgba(0,0,0,0.4)">{{ artist.upcoming }} upcoming shows</div>
            </div>
            <div class="d-flex align-center ga-3">
              <span class="label">{{ artist.status }}</span>
              <AppButton variant="ghost" size="sm">Open</AppButton>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-row dense>
          <v-col cols="6"><StatCard label="Avg Deal" value="$3,900" sub="This quarter" /></v-col>
          <v-col cols="6"><StatCard label="Win Rate" value="68%" sub="Last 30 deals" /></v-col>
          <v-col cols="6"><StatCard variant="mustard" label="New Venues" value="14" sub="This month" /></v-col>
          <v-col cols="6"><StatCard label="Contracts Out" value="5" sub="Pending sig." /></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
