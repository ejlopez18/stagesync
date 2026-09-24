<script setup lang="ts">
import { ref, computed } from 'vue'
import AppBadge from '@/components/common/AppBadge.vue'
import AppButton from '@/components/common/AppButton.vue'
import type { BadgeStatus } from '@/types'

const tab = ref('upcoming')
const selectedMonth = ref('oct')

const months = [
  { value: 'oct', label: 'Oct 2026' },
  { value: 'nov', label: 'Nov 2026' },
  { value: 'dec', label: 'Dec 2026' },
]

// ── All month data ──────────────────────────────────────────────

const allData = {
  oct: {
    stats: { gross: '$41.2k', shows: 8, offers: 3, merch: '$7,610' },
    upcoming: [
      { date: 'Oct 04', venue: 'Palladium', city: 'Los Angeles, CA', status: 'confirmed' as BadgeStatus },
      { date: 'Oct 09', venue: 'House of Blues', city: 'Chicago, IL', status: 'confirmed' as BadgeStatus },
      { date: 'Oct 14', venue: 'Webster Hall', city: 'New York, NY', status: 'hold' as BadgeStatus },
      { date: 'Oct 19', venue: 'Showbox', city: 'Seattle, WA', status: 'pending' as BadgeStatus },
    ],
    riders: [
      { date: 'Oct 04', venue: 'Palladium', tech: 'confirmed' as BadgeStatus, hosp: 'confirmed' as BadgeStatus },
      { date: 'Oct 09', venue: 'House of Blues', tech: 'confirmed' as BadgeStatus, hosp: 'pending' as BadgeStatus },
      { date: 'Oct 14', venue: 'Webster Hall', tech: 'pending' as BadgeStatus, hosp: 'pending' as BadgeStatus },
      { date: 'Oct 19', venue: 'Showbox', tech: 'hold' as BadgeStatus, hosp: 'hold' as BadgeStatus },
    ],
    offers: [
      { venue: 'Roxy Theatre', city: 'West Hollywood, CA', date: 'Nov 02', guarantee: '$4,500' },
      { venue: 'Middle East', city: 'Cambridge, MA', date: 'Nov 08', guarantee: '$2,200' },
    ],
    past: [
      { date: 'Sep 28', venue: 'Ryman Auditorium', city: 'Nashville, TN', capacity: 2362, sold: 2100, net: 22100, status: 'confirmed' as BadgeStatus },
      { date: 'Sep 20', venue: 'The Fillmore', city: 'San Francisco, CA', capacity: 1150, sold: 980, net: 14500, status: 'confirmed' as BadgeStatus },
      { date: 'Sep 15', venue: 'Greek Theatre', city: 'Los Angeles, CA', capacity: 5870, sold: 4200, net: 18200, status: 'confirmed' as BadgeStatus },
      { date: 'Sep 08', venue: 'Terminal 5', city: 'New York, NY', capacity: 3000, sold: 2640, net: 17800, status: 'confirmed' as BadgeStatus },
    ],
    merch: [
      { name: 'Tee — Black', stock: 45, sold: 87, revenue: 2610 },
      { name: 'Tee — White', stock: 22, sold: 64, revenue: 1920 },
      { name: 'Hoodie', stock: 18, sold: 31, revenue: 1550 },
      { name: 'Cap', stock: 33, sold: 42, revenue: 840 },
      { name: 'Poster', stock: 80, sold: 115, revenue: 690 },
    ],
    bar: [
      { name: 'Beer', price: 8, sold: 342, emoji: '🍺' },
      { name: 'Cocktails', price: 12, sold: 189, emoji: '🍹' },
      { name: 'Wine', price: 10, sold: 97, emoji: '🍷' },
      { name: 'Soft Drinks', price: 5, sold: 156, emoji: '🥤' },
      { name: 'Water', price: 4, sold: 203, emoji: '💧' },
    ],
    tickets: { venue: 'Palladium', city: 'Los Angeles, CA', date: 'Oct 04', capacity: 850, sold: 762, avgPrice: 22, venueFee: 1200 },
  },
  nov: {
    stats: { gross: '$38.5k', shows: 6, offers: 2, merch: '$5,820' },
    upcoming: [
      { date: 'Nov 02', venue: 'Roxy Theatre', city: 'West Hollywood, CA', status: 'confirmed' as BadgeStatus },
      { date: 'Nov 08', venue: 'Middle East', city: 'Cambridge, MA', status: 'confirmed' as BadgeStatus },
      { date: 'Nov 15', venue: 'Exit/In', city: 'Nashville, TN', status: 'pending' as BadgeStatus },
      { date: 'Nov 22', venue: 'Troubadour', city: 'West Hollywood, CA', status: 'hold' as BadgeStatus },
    ],
    riders: [
      { date: 'Nov 02', venue: 'Roxy Theatre', tech: 'confirmed' as BadgeStatus, hosp: 'confirmed' as BadgeStatus },
      { date: 'Nov 08', venue: 'Middle East', tech: 'pending' as BadgeStatus, hosp: 'pending' as BadgeStatus },
      { date: 'Nov 15', venue: 'Exit/In', tech: 'pending' as BadgeStatus, hosp: 'hold' as BadgeStatus },
      { date: 'Nov 22', venue: 'Troubadour', tech: 'hold' as BadgeStatus, hosp: 'hold' as BadgeStatus },
    ],
    offers: [
      { venue: 'Bowery Ballroom', city: 'New York, NY', date: 'Dec 03', guarantee: '$5,200' },
    ],
    past: [
      { date: 'Oct 19', venue: 'Showbox', city: 'Seattle, WA', capacity: 1100, sold: 990, net: 12800, status: 'confirmed' as BadgeStatus },
      { date: 'Oct 14', venue: 'Webster Hall', city: 'New York, NY', capacity: 1500, sold: 1200, net: 16400, status: 'confirmed' as BadgeStatus },
      { date: 'Oct 09', venue: 'House of Blues', city: 'Chicago, IL', capacity: 1800, sold: 1540, net: 19200, status: 'confirmed' as BadgeStatus },
      { date: 'Oct 04', venue: 'Palladium', city: 'Los Angeles, CA', capacity: 850, sold: 762, net: 13229, status: 'confirmed' as BadgeStatus },
    ],
    merch: [
      { name: 'Tee — Black', stock: 28, sold: 59, revenue: 1770 },
      { name: 'Tee — White', stock: 14, sold: 48, revenue: 1440 },
      { name: 'Hoodie', stock: 9, sold: 22, revenue: 1100 },
      { name: 'Cap', stock: 41, sold: 31, revenue: 620 },
      { name: 'Poster', stock: 55, sold: 73, revenue: 438 },
    ],
    bar: [
      { name: 'Beer', price: 8, sold: 281, emoji: '🍺' },
      { name: 'Cocktails', price: 12, sold: 144, emoji: '🍹' },
      { name: 'Wine', price: 10, sold: 76, emoji: '🍷' },
      { name: 'Soft Drinks', price: 5, sold: 130, emoji: '🥤' },
      { name: 'Water', price: 4, sold: 175, emoji: '💧' },
    ],
    tickets: { venue: 'Roxy Theatre', city: 'West Hollywood, CA', date: 'Nov 02', capacity: 600, sold: 543, avgPrice: 24, venueFee: 900 },
  },
  dec: {
    stats: { gross: '$52.1k', shows: 10, offers: 5, merch: '$9,430' },
    upcoming: [
      { date: 'Dec 05', venue: 'Terminal 5', city: 'New York, NY', status: 'confirmed' as BadgeStatus },
      { date: 'Dec 12', venue: '9:30 Club', city: 'Washington, DC', status: 'confirmed' as BadgeStatus },
      { date: 'Dec 19', venue: "Stubb's", city: 'Austin, TX', status: 'pending' as BadgeStatus },
      { date: 'Dec 28', venue: 'House of Blues', city: 'New Orleans, LA', status: 'hold' as BadgeStatus },
    ],
    riders: [
      { date: 'Dec 05', venue: 'Terminal 5', tech: 'confirmed' as BadgeStatus, hosp: 'confirmed' as BadgeStatus },
      { date: 'Dec 12', venue: '9:30 Club', tech: 'confirmed' as BadgeStatus, hosp: 'confirmed' as BadgeStatus },
      { date: 'Dec 19', venue: "Stubb's", tech: 'pending' as BadgeStatus, hosp: 'pending' as BadgeStatus },
      { date: 'Dec 28', venue: 'House of Blues', tech: 'hold' as BadgeStatus, hosp: 'hold' as BadgeStatus },
    ],
    offers: [
      { venue: 'First Avenue', city: 'Minneapolis, MN', date: 'Jan 10', guarantee: '$3,800' },
      { venue: 'Bluebird Theater', city: 'Denver, CO', date: 'Jan 17', guarantee: '$2,900' },
    ],
    past: [
      { date: 'Nov 22', venue: 'Troubadour', city: 'West Hollywood, CA', capacity: 400, sold: 400, net: 9800, status: 'confirmed' as BadgeStatus },
      { date: 'Nov 15', venue: 'Exit/In', city: 'Nashville, TN', capacity: 500, sold: 430, net: 8600, status: 'confirmed' as BadgeStatus },
      { date: 'Nov 08', venue: 'Middle East', city: 'Cambridge, MA', capacity: 575, sold: 520, net: 10200, status: 'confirmed' as BadgeStatus },
      { date: 'Nov 02', venue: 'Roxy Theatre', city: 'West Hollywood, CA', capacity: 600, sold: 543, net: 11800, status: 'confirmed' as BadgeStatus },
    ],
    merch: [
      { name: 'Tee — Black', stock: 12, sold: 120, revenue: 3600 },
      { name: 'Tee — White', stock: 8, sold: 95, revenue: 2850 },
      { name: 'Hoodie', stock: 5, sold: 44, revenue: 2200 },
      { name: 'Cap', stock: 20, sold: 58, revenue: 1160 },
      { name: 'Poster', stock: 30, sold: 145, revenue: 870 },
    ],
    bar: [
      { name: 'Beer', price: 8, sold: 410, emoji: '🍺' },
      { name: 'Cocktails', price: 12, sold: 234, emoji: '🍹' },
      { name: 'Wine', price: 10, sold: 121, emoji: '🍷' },
      { name: 'Soft Drinks', price: 5, sold: 188, emoji: '🥤' },
      { name: 'Water', price: 4, sold: 240, emoji: '💧' },
    ],
    tickets: { venue: 'Terminal 5', city: 'New York, NY', date: 'Dec 05', capacity: 3000, sold: 2760, avgPrice: 26, venueFee: 2000 },
  },
}

const d = computed(() => allData[selectedMonth.value as keyof typeof allData])

const fmt = (n: number) => '$' + n.toLocaleString()

const ticketCalc = computed(() => {
  const t = d.value.tickets
  const gross = t.sold * t.avgPrice
  const agentCut = Math.round((gross - t.venueFee) * 0.15)
  const net = gross - t.venueFee - agentCut
  const pct = Math.round((t.sold / t.capacity) * 100)
  return { gross, agentCut, net, pct }
})

const merchTotal = computed(() => d.value.merch.reduce((s, i) => s + i.revenue, 0))
const barTotal = computed(() => d.value.bar.reduce((s, i) => s + i.price * i.sold, 0))
const barCut = computed(() => Math.round(barTotal.value * 0.05))
</script>

<template>
  <div>
    <!-- Month switcher + top strip -->
    <div class="d-flex align-center justify-space-between mb-4">
      <div class="d-flex align-center ga-2">
        <span style="font-size:12px;color:rgba(0,0,0,0.4);font-weight:500;margin-right:4px">Period</span>
        <v-btn-toggle v-model="selectedMonth" mandatory density="compact" rounded="lg" color="primary" variant="outlined">
          <v-btn v-for="m in months" :key="m.value" :value="m.value" size="small" style="font-size:12px;font-weight:500">
            {{ m.label }}
          </v-btn>
        </v-btn-toggle>
      </div>
      <div class="d-flex ga-4">
        <div class="text-right">
          <div style="font-size:11px;color:rgba(0,0,0,0.4);font-weight:500;text-transform:uppercase;letter-spacing:0.06em">Tour Gross</div>
          <div style="font-size:18px;font-weight:700;letter-spacing:-0.02em">{{ d.stats.gross }}</div>
        </div>
        <div class="text-right">
          <div style="font-size:11px;color:rgba(0,0,0,0.4);font-weight:500;text-transform:uppercase;letter-spacing:0.06em">Shows</div>
          <div style="font-size:18px;font-weight:700">{{ d.stats.shows }}</div>
        </div>
        <div class="text-right">
          <div style="font-size:11px;color:rgba(0,0,0,0.4);font-weight:500;text-transform:uppercase;letter-spacing:0.06em">Merch</div>
          <div style="font-size:18px;font-weight:700;color:#D4A017">{{ d.stats.merch }}</div>
        </div>
        <div class="text-right">
          <div style="font-size:11px;color:rgba(0,0,0,0.4);font-weight:500;text-transform:uppercase;letter-spacing:0.06em">Open Offers</div>
          <div style="font-size:18px;font-weight:700">{{ d.stats.offers }}</div>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)">
      <v-tabs v-model="tab" color="primary" bg-color="transparent" density="compact" style="border-bottom:1px solid rgba(0,0,0,0.08)">
        <v-tab value="upcoming" style="font-size:13px;font-weight:500;text-transform:none;letter-spacing:0">Upcoming Shows</v-tab>
        <v-tab value="past" style="font-size:13px;font-weight:500;text-transform:none;letter-spacing:0">Past Shows</v-tab>
        <v-tab value="revenue" style="font-size:13px;font-weight:500;text-transform:none;letter-spacing:0">Revenue</v-tab>
      </v-tabs>

      <v-window v-model="tab">

        <!-- ── UPCOMING ── -->
        <v-window-item value="upcoming">
          <v-row no-gutters>
            <!-- Upcoming shows -->
            <v-col cols="8" style="border-right:1px solid rgba(0,0,0,0.06)">
              <div
                v-for="show in d.upcoming"
                :key="show.date"
                class="ss-table-row d-flex align-center justify-space-between px-5 py-3"
              >
                <div class="d-flex align-center ga-5">
                  <span class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.35);width:44px">{{ show.date }}</span>
                  <div>
                    <div style="font-size:13px;font-weight:500">{{ show.venue }}</div>
                    <div style="font-size:12px;color:rgba(0,0,0,0.4)">{{ show.city }}</div>
                  </div>
                </div>
                <AppBadge :status="show.status" />
              </div>

              <!-- Open Offers -->
              <div style="border-top:1px solid rgba(0,0,0,0.08);background:rgba(0,0,0,0.015)" class="px-5 py-3">
                <div style="font-size:12px;font-weight:600;color:rgba(0,0,0,0.45);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:10px">Open Offers</div>
                <div v-for="offer in d.offers" :key="offer.venue" class="d-flex align-center justify-space-between mb-3">
                  <div>
                    <div style="font-size:13px;font-weight:500">{{ offer.venue }}</div>
                    <div style="font-size:12px;color:rgba(0,0,0,0.4)">{{ offer.city }} &mdash; {{ offer.date }}</div>
                  </div>
                  <div class="d-flex align-center ga-2">
                    <span class="value-mono" style="font-size:13px;font-weight:600">{{ offer.guarantee }}</span>
                    <AppButton variant="primary" size="sm">Accept</AppButton>
                    <AppButton variant="secondary" size="sm">Counter</AppButton>
                    <AppButton variant="danger" size="sm">Reject</AppButton>
                  </div>
                </div>
              </div>
            </v-col>

            <!-- Rider summary -->
            <v-col cols="4">
              <div class="px-4 py-3" style="background:rgba(0,0,0,0.015);border-bottom:1px solid rgba(0,0,0,0.06)">
                <div class="d-flex">
                  <span class="label" style="flex:2">Show</span>
                  <span class="label text-center" style="flex:1">Tech</span>
                  <span class="label text-center" style="flex:1">Hosp</span>
                </div>
              </div>
              <div
                v-for="show in d.riders"
                :key="show.date"
                class="ss-table-row px-4 py-3 d-flex align-center"
              >
                <div style="flex:2">
                  <div style="font-size:13px;font-weight:500">{{ show.venue }}</div>
                  <div class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.35)">{{ show.date }}</div>
                </div>
                <div class="d-flex justify-center" style="flex:1"><AppBadge :status="show.tech" /></div>
                <div class="d-flex justify-center" style="flex:1"><AppBadge :status="show.hosp" /></div>
              </div>
            </v-col>
          </v-row>
        </v-window-item>

        <!-- ── PAST SHOWS ── -->
        <v-window-item value="past">
          <v-table density="comfortable">
            <thead>
              <tr style="background:rgba(0,0,0,0.02)">
                <th class="label">Date</th>
                <th class="label">Venue</th>
                <th class="label text-right">Capacity</th>
                <th class="label text-right">Sold</th>
                <th class="label text-right">Artist Net</th>
                <th class="label">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="show in d.past"
                :key="show.date"
                class="ss-table-row"
                style="cursor:pointer"
              >
                <td class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.4)">{{ show.date }}</td>
                <td>
                  <div style="font-size:13px;font-weight:500">{{ show.venue }}</div>
                  <div style="font-size:12px;color:rgba(0,0,0,0.4)">{{ show.city }}</div>
                </td>
                <td class="value-mono text-right" style="font-size:13px;color:rgba(0,0,0,0.45)">{{ show.capacity.toLocaleString() }}</td>
                <td class="text-right">
                  <div class="value-mono" style="font-size:13px;font-weight:500">{{ show.sold.toLocaleString() }}</div>
                  <div class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.35)">{{ Math.round(show.sold/show.capacity*100) }}%</div>
                </td>
                <td class="value-mono text-right" style="font-size:13px;font-weight:600;color:#22A05B">{{ fmt(show.net) }}</td>
                <td><AppBadge :status="show.status" /></td>
              </tr>
            </tbody>
          </v-table>
          <!-- Past totals footer -->
          <div style="border-top:1px solid rgba(0,0,0,0.08);background:rgba(0,0,0,0.015)" class="d-flex align-center justify-end ga-8 px-6 py-3">
            <div class="text-right">
              <div class="label">Total shows</div>
              <div style="font-size:15px;font-weight:700">{{ d.past.length }}</div>
            </div>
            <div class="text-right">
              <div class="label">Total net</div>
              <div style="font-size:15px;font-weight:700;color:#22A05B">{{ fmt(d.past.reduce((s,p)=>s+p.net,0)) }}</div>
            </div>
          </div>
        </v-window-item>

        <!-- ── REVENUE ── -->
        <v-window-item value="revenue">
          <v-row no-gutters>

            <!-- Tickets breakdown -->
            <v-col cols="4" style="border-right:1px solid rgba(0,0,0,0.06)">
              <div class="px-5 pt-4 pb-2" style="border-bottom:1px solid rgba(0,0,0,0.06)">
                <div style="font-size:12px;font-weight:600;color:rgba(0,0,0,0.4);text-transform:uppercase;letter-spacing:0.06em">Tickets</div>
                <div class="d-flex align-baseline ga-2 mt-1">
                  <span style="font-size:24px;font-weight:700;letter-spacing:-0.02em">{{ fmt(ticketCalc.net) }}</span>
                  <span class="label">net</span>
                </div>
              </div>
              <div class="px-5 py-3" style="border-bottom:1px solid rgba(0,0,0,0.06)">
                <div class="d-flex justify-space-between mb-1">
                  <span style="font-size:12px;color:rgba(0,0,0,0.4)">{{ d.tickets.venue }}</span>
                  <span class="value-mono" style="font-size:12px">{{ d.tickets.sold }} / {{ d.tickets.capacity }}</span>
                </div>
                <v-progress-linear :model-value="ticketCalc.pct" color="primary" bg-color="rgba(0,0,0,0.06)" rounded height="5" />
                <span class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.35)">{{ ticketCalc.pct }}% sold</span>
              </div>
              <div class="px-5 py-3 d-flex flex-column ga-2">
                <div class="d-flex justify-space-between">
                  <span style="font-size:13px;color:rgba(0,0,0,0.55)">Door gross</span>
                  <span class="value-mono" style="font-size:13px">{{ fmt(ticketCalc.gross) }}</span>
                </div>
                <div class="d-flex justify-space-between">
                  <span style="font-size:13px;color:rgba(0,0,0,0.55)">Venue fee</span>
                  <span class="value-mono" style="font-size:13px;color:#E53E3E">−{{ fmt(d.tickets.venueFee) }}</span>
                </div>
                <div class="d-flex justify-space-between">
                  <span style="font-size:13px;color:rgba(0,0,0,0.55)">Agent (15%)</span>
                  <span class="value-mono" style="font-size:13px;color:#E53E3E">−{{ fmt(ticketCalc.agentCut) }}</span>
                </div>
                <v-divider class="my-1" />
                <div class="d-flex justify-space-between">
                  <span style="font-size:13px;font-weight:600">Artist net</span>
                  <span class="value-mono" style="font-size:13px;font-weight:700;color:#22A05B">{{ fmt(ticketCalc.net) }}</span>
                </div>
              </div>
            </v-col>

            <!-- Merch -->
            <v-col cols="4" style="border-right:1px solid rgba(0,0,0,0.06)">
              <div class="px-5 pt-4 pb-2 d-flex justify-space-between" style="border-bottom:1px solid rgba(0,0,0,0.06)">
                <div>
                  <div style="font-size:12px;font-weight:600;color:rgba(0,0,0,0.4);text-transform:uppercase;letter-spacing:0.06em">Merch</div>
                  <div style="font-size:24px;font-weight:700;letter-spacing:-0.02em;margin-top:4px">{{ fmt(merchTotal) }}</div>
                </div>
              </div>
              <v-table density="compact">
                <thead>
                  <tr style="background:rgba(0,0,0,0.02)">
                    <th class="label" style="width:50%">Item</th>
                    <th class="label text-right">Stock</th>
                    <th class="label text-right">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in d.merch" :key="item.name" class="ss-table-row">
                    <td style="font-size:13px">{{ item.name }}</td>
                    <td class="value-mono text-right" :style="item.stock < 15 ? 'color:#E53E3E' : 'color:rgba(0,0,0,0.4)'">{{ item.stock }}</td>
                    <td class="value-mono text-right" style="font-weight:500;font-size:13px">{{ fmt(item.revenue) }}</td>
                  </tr>
                </tbody>
              </v-table>
              <div class="d-flex justify-space-between px-4 py-3" style="background:rgba(0,0,0,0.02);border-top:1px solid rgba(0,0,0,0.06)">
                <span class="label">Total</span>
                <span style="font-size:13px;font-weight:700">{{ fmt(merchTotal) }}</span>
              </div>
            </v-col>

            <!-- Bar -->
            <v-col cols="4">
              <div class="px-5 pt-4 pb-2 d-flex justify-space-between align-start" style="border-bottom:1px solid rgba(0,0,0,0.06)">
                <div>
                  <div style="font-size:12px;font-weight:600;color:rgba(0,0,0,0.4);text-transform:uppercase;letter-spacing:0.06em">Bar</div>
                  <div style="font-size:24px;font-weight:700;letter-spacing:-0.02em;margin-top:4px">{{ fmt(barCut) }}</div>
                </div>
                <div class="text-right">
                  <div class="label">Total bar</div>
                  <div style="font-size:14px;font-weight:600;color:rgba(0,0,0,0.5)">{{ fmt(barTotal) }}</div>
                  <div class="label">5% cut</div>
                </div>
              </div>
              <div
                v-for="item in d.bar"
                :key="item.name"
                class="ss-table-row d-flex align-center justify-space-between px-5 py-2"
              >
                <div class="d-flex align-center ga-2">
                  <span style="font-size:15px">{{ item.emoji }}</span>
                  <div>
                    <div style="font-size:13px">{{ item.name }}</div>
                    <div class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.35)">{{ item.sold }} sold · {{ fmt(item.price) }}</div>
                  </div>
                </div>
                <span class="value-mono" style="font-size:13px;font-weight:500">{{ fmt(item.price * item.sold) }}</span>
              </div>
            </v-col>
          </v-row>
        </v-window-item>

      </v-window>
    </v-card>
  </div>
</template>
