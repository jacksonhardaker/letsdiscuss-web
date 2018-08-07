// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import Cookies from 'js-cookie';

// Styles
import './styles/scss/main.scss';
Vue.config.productionTip = false;

// Setup axios
axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.crossDomain = true;

const token = Cookies.get('LD-user-token') || null;
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
