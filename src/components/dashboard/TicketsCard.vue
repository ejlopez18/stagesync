<script setup lang="ts">
const show = { date: 'Oct 04', venue: 'Palladium', city: 'Los Angeles, CA', capacity: 850, sold: 762, avgPrice: 22 }
const gross = show.sold * show.avgPrice
const venueFee = 1200
const agentCut = Math.round((gross - venueFee) * 0.15)
const net = gross - venueFee - agentCut
const pct = Math.round((show.sold / show.capacity) * 100)
const fmt = (n: number) => '$' + n.toLocaleString()

const rows = [
  { label: 'Door gross', value: fmt(gross), color: 'rgba(0,0,0,0.7)' },
  { label: 'Venue fee', value: `−${fmt(venueFee)}`, color: '#E53E3E' },
  { label: 'Agent (15%)', value: `−${fmt(agentCut)}`, color: '#E53E3E' },
]
</script>

<template>
  <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)" class="h-100">
    <v-card-text class="pa-5">
      <span style="font-size:13px;font-weight:600;letter-spacing:0.01em">Next Show — Tickets</span>
      <div class="d-flex align-baseline ga-2 mt-2">
        <span style="font-size:26px;font-weight:700;letter-spacing:-0.02em">{{ fmt(net) }}</span>
        <span class="label">artist net</span>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-text class="px-5 py-4">
      <div class="d-flex justify-space-between mb-2">
        <span style="font-size:12px;color:rgba(0,0,0,0.45)">{{ show.venue }}, {{ show.city }}</span>
        <span class="value-mono" style="font-size:12px">{{ show.sold }} / {{ show.capacity }}</span>
      </div>
      <v-progress-linear
        :model-value="pct"
        color="primary"
        bg-color="rgba(0,0,0,0.06)"
        rounded
        height="6"
      />
      <span class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.4)">{{ pct }}% sold</span>
    </v-card-text>

    <v-divider />

    <v-card-text class="pa-5">
      <div v-for="row in rows" :key="row.label" class="d-flex justify-space-between mb-2">
        <span style="font-size:13px;color:rgba(0,0,0,0.55)">{{ row.label }}</span>
        <span class="value-mono" :style="{ color: row.color, fontWeight: '500' }">{{ row.value }}</span>
      </div>
      <v-divider class="my-2" />
      <div class="d-flex justify-space-between">
        <span style="font-size:13px;font-weight:600">Artist net</span>
        <span class="value-mono" style="font-weight:700;color:#22A05B">{{ fmt(net) }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>
