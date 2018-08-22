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
    state.status = 'success';
    state.token = token;
  },
  [AUTH.facebook.error]: state => {
    state.status = 'error';
  },
  [AUTH.google.request]: state => {
    state.status = 'loading';
  },
  [AUTH.google.success]: (state, token) => {
    state.status = 'success';
    state.token = token;
  },
  [AUTH.google.error]: state => {
    state.status = 'error';
  },
  [AUTH.logout.request]: state => {
    state.status = 'loading';
  },
  [AUTH.logout.success]: state => {
    state.status = 'success';
    state.token = null;
  },
  [AUTH.logout.error]: state => {
    state.status = 'error';
  },
  [AUTH.invalidToken]: state => {
    state.status = 'invalid token';
    state.token = null;
  },
  [AUTH.token.validate.request]: state => {
    state.status = 'loading';
  },
  [AUTH.token.validate.success]: state => {
    state.status = 'success';
  },
  [AUTH.token.validate.error]: state => {
    state.status = 'error';
  },
};

const actions = {
  ['validateToken']: ({ commit, dispatch }, token) => {
    return new Promise((resolve, reject) => {
      commit(AUTH.token.validate.request);

      axios
        .get(`/token/isvalid/${token}`)
        .then(res => {
          commit(AUTH.token.validate.success);

          resolve(res.data);
        })
        .catch(err => {
          commit(AUTH.token.validate.error, err);

          reject(err);
        });
    });
  },
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
        dispatch('hideLoginModal');
        dispatch('getCurrentPerson', token);

        resolve(token);

        // Remove event listener.
        window.removeEventListener('message', callback);
      };

      // Add event listener.
      window.addEventListener('message', callback);

      let baseUrl = process.env.API_URL;

      window.open(
        `${baseUrl}/oauth/facebook`,
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
        dispatch('hideLoginModal');
        dispatch('getCurrentPerson', token);

        resolve(token);

        // Remove event listener.
        window.removeEventListener('message', callback);
      };

      // Add event listener.
      window.addEventListener('message', callback);

      let baseUrl = process.env.API_URL;

      window.open(
        `${baseUrl}/oauth/google`,
        'pop',
        'width=600, height=640, scrollbars=no'
      );
    });
  },
  ['logout']: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH.logout.request);
      commit(LOADING.begin);

      axios
        .put('/oauth/logout')
        .then(res => {
          commit(AUTH.logout.success);
          commit(LOADING.finish);

          Cookies.remove('LD-user-token');
          axios.defaults.headers.common['Authorization'] = null;

          resolve(res);
        })
        .catch(err => {
          commit(AUTH.logout.error, err);
          commit(LOADING.finish);

          Cookies.remove('LD-user-token');
          axios.defaults.headers.common['Authorization'] = null;

          reject(err);
        });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
