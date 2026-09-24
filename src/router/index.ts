import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/pages/DashboardView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: DashboardView },
  ],
})
