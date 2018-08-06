import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageHome from '@/components/page/PageHome';
import PageAbout from '@/components/page/PageAbout';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    }
  ],
  mode: 'history'
});
