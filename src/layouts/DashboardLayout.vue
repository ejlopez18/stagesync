<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import type { UserRole } from '@/types'

const user = useUserStore()

const roles: { value: UserRole; label: string }[] = [
  { value: 'artist', label: 'Artist' },
  { value: 'agent', label: 'Booking Agent' },
  { value: 'venue', label: 'Venue' },
  { value: 'tour-manager', label: 'Tour Manager' },
]

const navItems = computed(() => {
  const byRole: Record<UserRole, { label: string; icon: string }[]> = {
    artist: [
      { label: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
      { label: 'Shows', icon: 'mdi-calendar-outline' },
      { label: 'Offers', icon: 'mdi-handshake-outline' },
      { label: 'Riders', icon: 'mdi-clipboard-list-outline' },
      { label: 'Merch', icon: 'mdi-tshirt-crew-outline' },
    ],
    agent: [
      { label: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
      { label: 'Pipeline', icon: 'mdi-chart-timeline-variant' },
      { label: 'Roster', icon: 'mdi-account-music-outline' },
      { label: 'Venues', icon: 'mdi-map-marker-outline' },
      { label: 'Contracts', icon: 'mdi-file-sign' },
    ],
    venue: [
      { label: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
      { label: 'Calendar', icon: 'mdi-calendar-month-outline' },
      { label: 'Inquiries', icon: 'mdi-inbox-outline' },
      { label: 'Riders', icon: 'mdi-clipboard-check-outline' },
      { label: 'Reports', icon: 'mdi-chart-bar' },
    ],
    'tour-manager': [
      { label: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
      { label: 'Itinerary', icon: 'mdi-map-outline' },
      { label: 'Riders', icon: 'mdi-clipboard-list-outline' },
      { label: 'Crew', icon: 'mdi-account-group-outline' },
      { label: 'Budget', icon: 'mdi-wallet-outline' },
    ],
  }
  return byRole[user.role]
})

const roleLabel = computed(() => roles.find(r => r.value === user.role)?.label ?? '')
</script>

<template>
  <v-layout>
    <!-- Sidebar -->
    <v-navigation-drawer permanent width="220" color="secondary">
      <!-- Logo -->
      <div class="px-5 pt-6 pb-4">
        <div class="d-flex align-center ga-2">
          <v-sheet
            color="primary"
            rounded="lg"
            width="30"
            height="30"
            class="d-flex align-center justify-center"
          >
            <span style="font-size:11px;font-weight:800;color:#0A0A0A;letter-spacing:0.02em">SS</span>
          </v-sheet>
          <span style="font-size:15px;font-weight:700;color:#FFFFFF;letter-spacing:-0.01em">StageSync</span>
        </div>
      </div>

      <!-- Role chip -->
      <div class="px-5 mb-4">
        <v-chip
          size="x-small"
          variant="tonal"
          color="primary"
          class="text-uppercase"
          style="letter-spacing:0.06em;font-size:10px"
        >
          {{ roleLabel }}
        </v-chip>
      </div>

      <!-- Nav -->
      <v-list density="compact" nav class="px-2">
        <v-list-item
          v-for="(item, i) in navItems"
          :key="item.label"
          :prepend-icon="item.icon"
          :title="item.label"
          :active="i === 0"
          active-color="primary"
          rounded="lg"
          :style="i !== 0 ? 'color:rgba(255,255,255,0.5)' : ''"
          @click.prevent
        />
      </v-list>

      <!-- Spacer -->
      <template #append>
        <div class="pa-4" style="border-top:1px solid rgba(255,255,255,0.08)">
          <p class="label mb-2" style="color:rgba(255,255,255,0.3)">View as</p>
          <v-select
            :model-value="user.role"
            :items="roles"
            item-title="label"
            item-value="value"
            variant="outlined"
            density="compact"
            hide-details
            rounded="lg"
            base-color="rgba(255,255,255,0.3)"
            color="primary"
            style="font-size:12px"
            @update:model-value="user.setRole($event as UserRole)"
          />
        </div>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar elevation="0" color="surface" border="b" height="56">
      <v-app-bar-title>
        <div class="d-flex align-center ga-3">
          <span style="font-size:15px;font-weight:600;letter-spacing:-0.01em">Dashboard</span>
          <v-divider vertical style="height:16px;opacity:0.2" />
          <span style="font-size:13px;color:rgba(0,0,0,0.45)">{{ roleLabel }}</span>
        </div>
      </v-app-bar-title>
      <template #append>
        <div class="d-flex align-center ga-3 mr-4">
          <span class="value-mono" style="font-size:12px;color:rgba(0,0,0,0.4)">
            {{ new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
          </span>
          <v-avatar color="primary" size="32">
            <span style="font-size:12px;font-weight:700;color:#0A0A0A">{{ user.name.charAt(0) }}</span>
          </v-avatar>
        </div>
      </template>
    </v-app-bar>

    <!-- Main Content -->
    <v-main style="background:#F8F6F1">
      <v-container fluid class="pa-6">
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>
