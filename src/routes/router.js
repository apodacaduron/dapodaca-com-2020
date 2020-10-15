import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '../views/Home.vue';

const routes = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '*', redirect: '/' },
  ],
});

export default routes;
