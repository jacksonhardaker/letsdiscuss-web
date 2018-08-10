import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

import auth from './modules/auth.module.js';
import person from './modules/person.module.js';
import article from './modules/article.module.js';
import alias from './modules/alias.module.js';
import comment from './modules/comment.module.js';

export default new Vuex.Store({
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== `production`,
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth,
    person,
    article,
    alias,
    comment
  }
});
