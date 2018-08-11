import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import PageHome from '@/components/page/PageHome';
import PageAbout from '@/components/page/PageAbout';
import PageArticle from '@/components/page/PageArticle';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
      meta: {
        guest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout,
      meta: {
        guest: true
      }
    },
    {
      path: '/article/:alias/:date/:slug',
      name: 'article',
      component: PageArticle,
      meta: {
        guest: false
      }
    }
  ],
  mode: 'history'
});
