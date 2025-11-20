import type { RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import PortfolioDetail from '../pages/PortfolioDetail.vue';

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