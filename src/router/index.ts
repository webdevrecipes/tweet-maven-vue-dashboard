import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Account from '@/views/Account.vue';
import Scheduler from '@/views/Scheduler.vue';
import Sandbox from '@/views/Sandbox.vue';
import Explore from '@/views/Explore.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/scheduler',
    name: 'Scheduler',
    component: Scheduler,
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Sandbox,
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
