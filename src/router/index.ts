import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/pages/About.vue'),
  },
  {
    path: '/pizza-times',
    name: 'pizzaTimes',
    component: () => import('@/components/pages/pizzaTimes/PizzaTimes.vue'),
  },


];

const router = new VueRouter({
  routes,
});

export default router;
