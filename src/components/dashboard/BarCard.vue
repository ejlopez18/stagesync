<script setup lang="ts">
const items = [
  { name: 'Beer', price: 8, sold: 342, emoji: '🍺' },
  { name: 'Cocktails', price: 12, sold: 189, emoji: '🍹' },
  { name: 'Wine', price: 10, sold: 97, emoji: '🍷' },
  { name: 'Soft Drinks', price: 5, sold: 156, emoji: '🥤' },
  { name: 'Water', price: 4, sold: 203, emoji: '💧' },
]
const total = items.reduce((s, i) => s + i.price * i.sold, 0)
const artistCut = Math.round(total * 0.05)
const fmt = (n: number) => '$' + n.toLocaleString()
</script>

<template>
  <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)" class="h-100">
    <div class="d-flex align-start justify-space-between px-5 pt-4 pb-3">
      <div>
        <span style="font-size:13px;font-weight:600">Bar</span>
        <div class="label mt-0.5">5% rider clause</div>
      </div>
      <div class="text-right">
        <div style="font-size:18px;font-weight:700">{{ fmt(artistCut) }}</div>
        <div class="label">your cut</div>
      </div>
    </div>
    <v-divider />
    <v-table density="compact">
      <tbody>
        <tr v-for="item in items" :key="item.name" class="ss-table-row">
          <td style="width:32px;font-size:16px">{{ item.emoji }}</td>
          <td>
            <div style="font-size:13px">{{ item.name }}</div>
            <div class="value-mono" style="font-size:11px;color:rgba(0,0,0,0.4)">{{ item.sold }} sold · {{ fmt(item.price) }}</div>
          </td>
          <td class="value-mono text-right" style="font-size:13px;font-weight:500">{{ fmt(item.price * item.sold) }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-divider />
    <div class="d-flex align-center justify-space-between px-5 py-3" style="background:rgba(0,0,0,0.02)">
      <span class="label">Bar total</span>
      <span style="font-size:13px;font-weight:700">{{ fmt(total) }}</span>
    </div>
  </v-card>
</template>
