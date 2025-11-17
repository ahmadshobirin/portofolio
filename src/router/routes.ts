import type { RouteRecordRaw } from 'vue-router';
const HomePage = () => import('../pages/HomePage.vue');
const PortfolioDetail = () => import('../pages/PortfolioDetail.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/portfolio/:id',
    name: 'portfolio-detail',
    component: PortfolioDetail,
  }
];