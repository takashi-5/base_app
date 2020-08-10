import Vue from 'vue';
import Vuex from 'vuex';

import state from './app/state';
import actions from './app/actions';
import mutations from './app/mutations';
import getters from './app/getters';

Vue.use(Vuex);

const app = {
  state,
  actions,
  mutations,
  getters,
};

const store = new Vuex.Store({
  modules: {
    app,
  },
});

export default store;
