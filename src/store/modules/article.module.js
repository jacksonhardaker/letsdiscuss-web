import axios from 'axios';
import router from '../../router';
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
  [ARTICLE.get.request]: state => {
    state.status = 'loading';
  },
  [ARTICLE.get.success]: (state, article) => {
    state.status = 'success';
    state.article = article;
  },
  [ARTICLE.get.error]: state => {
    state.status = 'error';
  },
  [ARTICLE.submit.request]: state => {
    state.status = 'loading';
  },
  [ARTICLE.submit.success]: (state) => {
    state.status = 'success';
  },
  [ARTICLE.submit.error]: state => {
    state.status = 'error';
  }
};

const actions = {
  ['submitNewArticle']: ({ commit, dispatch }, url) => {
    return new Promise((resolve, reject) => {
      commit(ARTICLE.submit.request);

      const params = new URLSearchParams();
      params.append('url', url);

      axios
        .put('/article', params)
        .then(res => {
          commit(ARTICLE.submit.success);
          console.log(res.data);

          router.push(`/article/${res.data.slug}`);
          // dispatch('getCurrentArticle')
        })
        .catch(err => {
          commit(ARTICLE.submit.error);
          reject(err);
          console.log(err);
        });
    });
  },
  ['getCurrentArticle']: ({ commit, dispatch }, params) => {
    return new Promise((resolve, reject) => {
      commit(ARTICLE.get.request);
      commit(LOADING.begin);

      axios
        .get(`/article/${params.alias}/${params.date}/${params.slug}`)
        .then(res => {
          commit(ARTICLE.get.success, res.data);
          commit(LOADING.finish);

          dispatch('getCurrentAliasForArticle', res.data);
          dispatch('getAllComments', res.data);

          resolve(res.data);
        })
        .catch(err => {
          commit(ARTICLE.get.error);
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
