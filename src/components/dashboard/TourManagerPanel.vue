<script setup lang="ts">
import StatCard from '@/components/common/StatCard.vue'
import AppButton from '@/components/common/AppButton.vue'
import RiderSummaryCard from '@/components/dashboard/RiderSummaryCard.vue'

const itinerary = [
  { day: 'Oct 04', city: 'Los Angeles, CA', venue: 'Palladium', load: '2:00 PM', show: '9:00 PM', travel: 'Bus overnight → SF' },
  { day: 'Oct 06', city: 'San Francisco, CA', venue: 'The Fillmore', load: '1:00 PM', show: '8:30 PM', travel: 'Bus overnight → Portland' },
  { day: 'Oct 08', city: 'Portland, OR', venue: 'Crystal Ballroom', load: '2:00 PM', show: '9:00 PM', travel: 'Bus overnight → Seattle' },
  { day: 'Oct 09', city: 'Seattle, WA', venue: 'Showbox', load: '1:00 PM', show: '8:00 PM', travel: 'Day off' },
]

const crew = [
  { name: 'Sam Ortega', role: 'FOH Engineer', phone: '(213) 555-0182' },
  { name: 'Lex Huang', role: 'Monitor Engineer', phone: '(310) 555-0047' },
  { name: 'Jordan Price', role: 'Backline Tech', phone: '(415) 555-0193' },
  { name: 'Casey Morales', role: 'Production Manager', phone: '(503) 555-0261' },
]

const budget = [
  { label: 'Hotels', budget: 12000, spent: 8400 },
  { label: 'Transport', budget: 18000, spent: 11200 },
  { label: 'Crew Fees', budget: 24000, spent: 16800 },
  { label: 'Production', budget: 9000, spent: 4350 },
]

const pct = (s: number, b: number) => Math.min(Math.round((s / b) * 100), 100)
const fmt = (n: number) => '$' + n.toLocaleString()
</script>

<template>
  <div class="d-flex flex-column ga-3">
    <v-row dense>
      <v-col cols="3"><StatCard variant="ink" label="Shows Remaining" value="22" sub="This leg" /></v-col>
      <v-col cols="3"><StatCard label="Days Out" value="31" sub="Since first show" /></v-col>
      <v-col cols="3"><StatCard variant="mustard" label="Riders Confirmed" value="6/14" sub="Across all dates" /></v-col>
      <v-col cols="3"><StatCard label="Crew on Run" value="11" sub="Current leg" /></v-col>
    </v-row>

    <v-row dense>
      <v-col cols="8">
        <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
          <div class="d-flex align-center justify-space-between px-5 py-3">
            <span style="font-size:13px;font-weight:600">Itinerary — Leg 1</span>
            <AppButton variant="ghost" size="sm">Export PDF</AppButton>
          </div>
          <v-divider />
          <div
            v-for="day in itinerary"
            :key="day.day"
            class="ss-table-row d-flex align-start ga-5 px-5 py-3"
          >
            <span class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.4);width:44px;padding-top:2px">{{ day.day }}</span>
            <div>
              <div style="font-size:13px;font-weight:500">{{ day.venue }}</div>
              <div style="font-size:12px;color:rgba(0,0,0,0.4)">{{ day.city }}</div>
              <div class="d-flex ga-4 mt-1">
                <span class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.35)">Load {{ day.load }}</span>
                <span class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.35)">Show {{ day.show }}</span>
                <span style="font-size:11px;color:rgba(0,0,0,0.35);font-style:italic">{{ day.travel }}</span>
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4">
        <RiderSummaryCard />
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="6">
        <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
          <div class="px-5 py-3">
            <span style="font-size:13px;font-weight:600">Budget</span>
          </div>
          <v-divider />
          <div class="pa-5 d-flex flex-column ga-4">
            <div v-for="item in budget" :key="item.label">
              <div class="d-flex justify-space-between mb-1">
                <span style="font-size:13px">{{ item.label }}</span>
                <span class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.45)">{{ fmt(item.spent) }} / {{ fmt(item.budget) }}</span>
              </div>
              <v-progress-linear
                :model-value="pct(item.spent, item.budget)"
                :color="pct(item.spent, item.budget) > 85 ? 'error' : 'primary'"
                bg-color="rgba(0,0,0,0.06)"
                rounded
                height="5"
              />
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
          <div class="d-flex align-center justify-space-between px-5 py-3">
            <span style="font-size:13px;font-weight:600">Crew</span>
            <AppButton variant="ghost" size="sm">Add</AppButton>
          </div>
          <v-divider />
          <div
            v-for="member in crew"
            :key="member.name"
            class="ss-table-row d-flex align-center justify-space-between px-5 py-3"
          >
            <div>
              <div style="font-size:13px;font-weight:500">{{ member.name }}</div>
              <div class="label">{{ member.role }}</div>
            </div>
            <span class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.4)">{{ member.phone }}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
