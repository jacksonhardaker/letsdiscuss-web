// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import Cookies from 'js-cookie';

Vue.use(AsyncComputed);

// Styles
import './styles/scss/main.scss';
Vue.config.productionTip = false;

// Setup axios
axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.crossDomain = true;

const token = Cookies.get('LD-user-token') || null;

// User is logged in.
if (token) {
  // Validate token
  store.dispatch('validateToken', token).then(valid => {
    if (valid) {
      store.dispatch('getCurrentPerson');
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      Cookies.remove('LD-user-token');
      axios.defaults.headers.common['Authorization'] = null;
    }
  });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
