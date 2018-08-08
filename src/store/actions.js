import { LOADING } from './mutation.const';

export default {
    ['showGlobalLoading']: ({ commit, dispatch }) => {
      return commit(LOADING.begin);
    },
    ['hideGlobalLoading']: ({commit, dispatch }) => {
        return commit(LOADING.finish);
    }
  };