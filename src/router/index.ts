import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      const navHeight = 64;
      return {
        el: to.hash,
        behavior: 'smooth',
        top: navHeight,
      };
    }
    return { top: 0 };
  },
});

export default router;