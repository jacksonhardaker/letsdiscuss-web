import axios from 'axios';
import { PERSON } from '../mutation.const';

const state = {
  currentPerson: null,
  status: ''
};

const getters = {
  personStatus: state => state.status,
  currentPerson: state => state.currentPerson
};

const mutations = {
  [PERSON.request]: state => {
    state.status = 'loading';
  },
  [PERSON.success]: (state, person) => {
    state.status = 'success';
    state.currentPerson = person;
  },
  [PERSON.error]: state => {
    state.status = 'error';
  }
};

const actions = {
  ['getCurrentPerson']: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(PERSON.request);

      axios
        .get('/person')
        .then(res => {
          commit(PERSON.success, res.data);
        })
        .catch(err => {
          commit(PERSON.error, err);
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
