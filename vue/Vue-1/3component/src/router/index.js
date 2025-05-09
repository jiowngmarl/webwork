import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('@/views/NestedComponent.vue'),
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('@/views/ParentComponent4.vue'),
    },
    {
      path: '/emp',
      name: 'emp',
      component: () => import('@/views/EmpComponent.vue'),
    },
    {
      path: '/empView',
      name: 'empView',
      component: () => import('@/views/EmpView.vue'),
    },
    {
      path: '/slotView',
      name: 'slotView',
      component: () => import('@/views/SlotView.vue'),
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: () => import('@/views/VuetifyView.vue'),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/views/StoreView.vue'),
    },
  ],
})

//
export default router
