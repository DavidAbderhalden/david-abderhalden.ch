import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [];

if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/dev',
    name: 'Development',
    component: () => import('@/views/development.vue'),
  })
}

export { routes };