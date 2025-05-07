import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/boardTable',
      name: 'boardTable',
      component: () => import('../views/BoardTable.vue'),
    },
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
      path: '/boardList',
      name: 'boardList',
      component: () => import('@/views/BoardList.vue'),
    },
    {
      path: '/boardForm',
      name: 'boardForm',
      component: () => import('../views/BoardForm.vue'),
    },
    {
      path: '/boardInfo', // param으로 사용할 경우  'boardInfo/:id'로 지정해야 id정보를 받아옴
      name: 'boardInfo',
      component: () => import('../views/BoardInfo.vue'),
    },
  ],
})

export default router
