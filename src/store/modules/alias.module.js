import axios from 'axios';
import { ALIAS } from '../mutation.const';

const state = {
  currentAlias: null,
  status: ''
};

const getters = {
  aliasStatus: state => state.status,
  currentAlias: state => state.currentAlias
};

const mutations = {
  [ALIAS.request]: state => {
    state.status = 'loading';
  },
  [ALIAS.success]: (state, alias) => {
    state.status = 'success';
    state.currentAlias = alias;
  },
  [ALIAS.error]: state => {
    state.status = 'error';
  }
};

const actions = {
  ['getCurrentAliasForArticle']: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      commit(ALIAS.request);

      axios
        .get(`/alias/current/${params.data.id}`)
        .then(res => {
          commit(ALIAS.success, res.data);
        })
        .catch(err => {
          commit(ALIAS.error, err);
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
