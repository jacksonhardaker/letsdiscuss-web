import axios from 'axios';
import { ARTICLE, LOADING } from '../mutation.const';

const state = {
  status: '',
  article: null
};

const getters = {
  getArticleStatus: state => state.status,
  getCurrentArticle: state => state.article
};

const mutations = {
  [ARTICLE.request]: state => {
    state.status = 'loading';
  },
  [ARTICLE.success]: (state, article) => {
    state.status = 'success';
    state.article = article;
  },
  [ARTICLE.error]: state => {
    state.status = 'error';
  }
};

const actions = {
  ['getCurrentArticle']: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      commit(ARTICLE.request);
      commit(LOADING.begin);

      axios
        .get(`/article/${params.alias}/${params.date}/${params.slug}`)
        .then(res => {
          commit(ARTICLE.success, res.data);
          commit(LOADING.finish);

          resolve(res);
        })
        .catch(err => {
          commit(ARTICLE.error);
          reject(err);
          console.log(err);
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
