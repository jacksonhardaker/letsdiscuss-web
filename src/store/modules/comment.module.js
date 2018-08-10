import axios from 'axios';
import { COMMENTS, LOADING } from '../mutation.const';

const state = {
  articleComments: [],
  status: ''
};

const getters = {
  commentStatus: state => state.status,
  articleComments: state => state.articleComments
};

const mutations = {
  [COMMENTS.leave.request]: state => {
    state.status = 'loading';
  },
  [COMMENTS.leave.success]: (state, comment) => {
    state.status = 'success';
    state.articleComments.push(comment);
  },
  [COMMENTS.leave.error]: state => {
    state.status = 'error';
  }
};

const actions = {
  ['leaveComment']: ({ commit, dispatch }, args) => {
    return new Promise((resolve, reject) => {
      commit(COMMENTS.leave.request);

      commit(LOADING.begin);

      const params = new URLSearchParams();
      params.append('comment', args.commentText);

      axios
        .put(`/comment/${args.article.id}`, params)
        .then(res => {
          commit(COMMENTS.leave.success, res.data);
          commit(LOADING.finish);

          dispatch('getCurrentAliasForArticle', args.article);

          resolve(res.data);
        })
        .catch(err => {
          commit(COMMENTS.leave.error, err);
          commit(LOADING.finish);

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
