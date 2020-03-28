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

const urls = {
  develop: '/',
  production: process.env.VUE_APP_BASE_URL,
};

const base = process.env.NODE_ENV === 'development' ? urls.develop : urls.production;
const mode = (process.env.NODE_ENV === 'production') ? 'hash' : 'history';
const router = new VueRouter({
  mode,
  base,
  routes,
});

export default router;
