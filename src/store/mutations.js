import { LOADING } from './mutation.const';

export default {
    [LOADING.begin]: state => {
      state.loading = true;
    },
    [LOADING.finish]: (state) => {
      state.loading = false;
    }
  };