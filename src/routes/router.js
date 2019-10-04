import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../views/Home.vue';

const routes = new Router({
    routes: [
        { path: '/', component: Home }
    ]
  })

export default routes;