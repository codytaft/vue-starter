import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    countMutation(state) {
      state.count++;
    }
  },
  actions: {
    countAction(context) {
      context.commit('countMutation');
    }
  },
  getters: {
    countGetter(state) {
      return state.count;
    }
  }
});

export default store;
