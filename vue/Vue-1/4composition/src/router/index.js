import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BoardList from '../views/BoardList.vue'
// import BoardInfo from '../views/BoardInfo.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/nested',
      name: 'nested',
      component: () => import('../views/NestedComponent.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue'),
    },
    {
      path: '/provideInject',
      name: 'provideInject',
      component: () => import('../views/ProvideInject.vue'),
    },
    {
      path: '/watchView',
      name: 'watchView',
      component: () => import('../views/WatchView.vue'),
    },
    // {
    //   path: '/boardList',
    //   name: 'boardList',
    //   component: BoardList,
    // },
    // {
    //   path: '/boardInfo/:id',
    //   name: 'boardInfo',
    //   component: BoardInfo,
    // },
  ],
})

export default router
