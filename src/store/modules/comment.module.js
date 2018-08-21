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
  },
  [COMMENTS.get.all.request]: state => {
    state.status = 'loading';
  },
  [COMMENTS.get.all.success]: (state, comments) => {
    state.status = 'success';
    state.articleComments = comments;
  },
  [COMMENTS.get.all.error]: state => {
    state.status = 'error';
  },
  [COMMENTS.reply.request]: state => {
    state.status = 'loading';
  },
  [COMMENTS.reply.success]: (state, args) => {
    state.status = 'success';
    console.log(args.reply, args.parent);
    const index = state.articleComments.findIndex(
      comment => comment.id === args.parent.id
    );
    console.log(index);
    state.articleComments[index].replies.push(args.reply);
  },
  [COMMENTS.reply.error]: state => {
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

          dispatch('getCurrentAliasForArticle');

          resolve(res.data);
        })
        .catch(err => {
          commit(COMMENTS.leave.error, err);
          commit(LOADING.finish);

          reject(err);
        });
    });
  },
  ['replyToComment']: ({ commit, dispatch }, args) => {
    return new Promise((resolve, reject) => {
      commit(COMMENTS.reply.request);

      commit(LOADING.begin);

      const params = new URLSearchParams();
      params.append('comment', args.commentText);

      axios
        .put(
          `/comment/${args.comment.article}/reply/${args.comment.id}`,
          params
        )
        .then(res => {
          commit(COMMENTS.reply.success, {
            reply: res.data,
            parent: args.comment
          });
          commit(LOADING.finish);

          dispatch('getCurrentAliasForArticle');

          resolve(res.data);
        })
        .catch(err => {
          commit(COMMENTS.reply.error, err);
          commit(LOADING.finish);

          reject(err);
        });
    });
  },
  ['getAllComments']: ({ commit, dispatch }, article) => {
    return new Promise((resolve, reject) => {
      commit(COMMENTS.get.all.request);

      axios
        .get(`/comments/${article.id}`)
        .then(res => {
          commit(COMMENTS.get.all.success, res.data);

          resolve(res.data);
        })
        .catch(err => {
          commit(COMMENTS.get.all.error);
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
