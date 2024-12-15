import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PortfolioDetail from '../pages/PortfolioDetail.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/portfolio/:id',
    component: PortfolioDetail,
  },
];