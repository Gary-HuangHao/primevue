import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
        path: '/inputtext',
        name: 'inputtext',
        component: () => import('./views/inputtext/InputTextDemo.vue')
    },
    {
        path: '/listbox',
        name: 'listbox',
        component: () => import('./views/listbox/ListBoxDemo.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./views/button/ButtonDemo.vue')
    }
  ]
});