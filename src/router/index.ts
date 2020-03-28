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
    name: 'PizzaTimes',
    component: () => import('@/components/pages/pizzaTimes/PizzaTimes.vue'),
  },

  {
    path: '/weather',
    name: 'Weather',
    component: () => import('@/components/pages/weather/Weather.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
