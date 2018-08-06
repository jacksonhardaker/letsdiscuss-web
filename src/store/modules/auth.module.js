import Cookies from 'js-cookie';
import { resolve } from 'url';

const state = {
  token: Cookies.get('LD-user-token') || null,
  status: '',
  person: null
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  person: state => state.person
};

const mutations = {
  ['FACEBOOK_AUTH_REQUEST']: state => {
    state.status = 'loading';
  },
  ['FACEBOOK_AUTH_SUCCESS']: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  ['FACEBOOK_AUTH_ERROR']: (state) => {
    state.status = 'error'
  },
};

const actions = {
  ['FACEBOOK_AUTH_REQUEST']: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit('FACEBOOK_AUTH_REQUEST');

      const callback = received => {
        Cookies.set('LD-user-token', received.data.token);

        commit('FACEBOOK_AUTH_SUCCESS', received.data.token);
        window.removeEventListener('message', callback);
        resolve(received.data.token);
      };

      window.addEventListener('message', callback);

      let v = window.open(
        'http://localhost:3000/oauth/facebook',
        'pop',
        'width=600, height=640, scrollbars=no'
      );

    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
