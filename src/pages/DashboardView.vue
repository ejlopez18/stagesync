<script setup lang="ts">
import { computed } from 'vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import ArtistPanel from '@/components/dashboard/ArtistPanel.vue'
import AgentPanel from '@/components/dashboard/AgentPanel.vue'
import VenuePanel from '@/components/dashboard/VenuePanel.vue'
import TourManagerPanel from '@/components/dashboard/TourManagerPanel.vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const panel = computed(() => ({
  artist: ArtistPanel,
  agent: AgentPanel,
  venue: VenuePanel,
  'tour-manager': TourManagerPanel,
}[user.role]))
</script>

<template>
  <DashboardLayout>
    <component :is="panel" />
  </DashboardLayout>
</template>
