import Cookies from 'js-cookie';
import axios from 'axios';
import { AUTH, LOADING } from '../mutation.const';

const state = {
  token: Cookies.get('LD-user-token') || null,
  status: ''
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const mutations = {
  [AUTH.facebook.request]: state => {
    state.status = 'loading';
  },
  [AUTH.facebook.success]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [AUTH.facebook.error]: (state) => {
    state.status = 'error'
  },
  [AUTH.google.request]: state => {
    state.status = 'loading';
  },
  [AUTH.google.success]: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  [AUTH.google.error]: (state) => {
    state.status = 'error'
  }
};

const actions = {
  ['facebookLogin']: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH.facebook.request);
      commit(LOADING.begin);

      const callback = received => {
        let token = received.data.token;

        Cookies.set('LD-user-token', token);

        axios.defaults.headers.common['Authorization'] = token;
        commit(AUTH.facebook.success, token);
        commit(LOADING.finish);
        dispatch('CURRENT_PERSON_REQUEST', token);
        
        resolve(token);

        // Remove event listener.
        window.removeEventListener('message', callback);
      };

      // Add event listener.
      window.addEventListener('message', callback);

      let baseUrl = process.env.API_URL;

      window.open(
        `${ baseUrl }/oauth/facebook`,
        'pop',
        'width=600, height=640, scrollbars=no'
      );

    });
  },
  ['googleLogin']: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH.google.request);
      commit(LOADING.begin);

      const callback = received => {
        let token = received.data.token;

        Cookies.set('LD-user-token', token);

        axios.defaults.headers.common['Authorization'] = token;
        commit(AUTH.google.success, token);
        commit(LOADING.finish);
        dispatch('CURRENT_PERSON_REQUEST', token);
        
        resolve(token);

        // Remove event listener.
        window.removeEventListener('message', callback);
      };

      // Add event listener.
      window.addEventListener('message', callback);

      let baseUrl = process.env.API_URL;

      window.open(
        `${ baseUrl }/oauth/google`,
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
