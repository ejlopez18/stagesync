<script setup lang="ts">
const items = [
  { name: 'Tee — Black', stock: 45, sold: 87, revenue: 2610 },
  { name: 'Tee — White', stock: 22, sold: 64, revenue: 1920 },
  { name: 'Hoodie', stock: 18, sold: 31, revenue: 1550 },
  { name: 'Cap', stock: 33, sold: 42, revenue: 840 },
  { name: 'Poster', stock: 80, sold: 115, revenue: 690 },
]
const total = items.reduce((s, i) => s + i.revenue, 0)
const fmt = (n: number) => '$' + n.toLocaleString()
</script>

<template>
  <v-card rounded="xl" elevation="0" style="border:1px solid rgba(0,0,0,0.08)" class="h-100">
    <div class="d-flex align-center justify-space-between px-5 pt-4 pb-3">
      <span style="font-size:13px;font-weight:600;letter-spacing:0.01em">Merch</span>
      <span style="font-size:15px;font-weight:700">{{ fmt(total) }}</span>
    </div>
    <v-divider />
    <v-table density="compact">
      <thead>
        <tr>
          <th class="label" style="width:50%">Item</th>
          <th class="label text-right">Stock</th>
          <th class="label text-right">Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name" class="ss-table-row">
          <td style="font-size:13px">{{ item.name }}</td>
          <td
            class="value-mono text-right"
            :style="item.stock < 25 ? 'color:#E53E3E' : 'color:rgba(0,0,0,0.45)'"
          >
            {{ item.stock }}
          </td>
          <td class="value-mono text-right" style="font-weight:500">{{ fmt(item.revenue) }}</td>
        </tr>
      </tbody>
    </v-table>
    <v-divider />
    <div class="d-flex align-center justify-space-between px-5 py-3" style="background:rgba(0,0,0,0.02)">
      <span class="label">Tour total</span>
      <span style="font-size:13px;font-weight:700">{{ fmt(total) }}</span>
    </div>
  </v-card>
</template>
