import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ux',
      component: () => import('@/view/UxView.vue'),
    },
    {
      path: '/ux',
      name: 'ux',
      component: () => import('@/view/UxView.vue'),
    },
    {
      path: '/connect-s',
      name: 'connect-s',
      component: () => import('@/view/ConnectSView.vue'),
    },
    {
      path: '/connect-w',
      name: 'connect-w',
      component: () => import('@/view/ConnectWView.vue'),
    },
  ],
});

export default router;
