import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://icanhazdadjoke.com';
const headers = { Accept: 'application/json' };

export default new Vuex.Store({
  state: {
    // currentJoke: "This is a joke",
    // allJokes: []
    currentJoke: '',
    allJokes: [],
  },
  mutations: {
    //syncrous
    setCurrentJoke(state, context) {
      state.currentJoke = context;
      state.allJokes.push(context);
    },
  },
  actions: {
    //asyncronous
    async setCurrentJoke(state) {
      try {
        const joke = await fetch(url, { headers });
        const j = await joke.json();
        state.commit('setCurrentJoke', j.joke);
      } catch (err) {
        alert(err.message);
      }
    },
  },
  modules: {},
  getters: {
    getCurrentJoke: (state) => state.currentJoke,
    getAllJokes: (state) => state.allJokes,
  },
});
