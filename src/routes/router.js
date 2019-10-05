import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue';
import PageNotFound from '../components/404.vue';

const routes = new Router({
    routes: [
        { path: '/', component: Home },
        { path: '*', component: PageNotFound }
    ]
  })

export default routes;