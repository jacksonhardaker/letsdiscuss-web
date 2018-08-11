import { LOADING, LOGIN_MODAL } from './mutation.const';

export default {
    ['showGlobalLoading']: ({ commit, dispatch }) => {
      return commit(LOADING.begin);
    },
    ['hideGlobalLoading']: ({commit, dispatch }) => {
        return commit(LOADING.finish);
    },
    ['showLoginModal']: ({commit, dispatch}) => {
      return commit(LOGIN_MODAL.show);
    },
    ['hideLoginModal']: ({commit, dispatch}) => {
      return commit(LOGIN_MODAL.hide);
    }
  };