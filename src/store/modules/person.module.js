import axios from 'axios';

const state = {
  currentPerson: null,
  status: ''
};

const getters = {
  personStatus: state => state.status,
  currentPerson: state => state.currentPerson
};

const mutations = {};

const actions = {
  ['CURRENT_PERSON_REQUEST']: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit('CURRENT_PERSON_REQUEST');

      axios
        .get('/person')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
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
