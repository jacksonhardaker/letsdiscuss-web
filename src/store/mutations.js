import { LOADING, LOGIN_MODAL } from './mutation.const';

export default {
    [LOADING.begin]: state => {
      state.loading = true;
    },
    [LOADING.finish]: (state) => {
      state.loading = false;
    },
    [LOGIN_MODAL.show]: state => {
      state.showLoginModal = true;
    },
    [LOGIN_MODAL.hide]: state => {
      state.showLoginModal = false;
    }
  };