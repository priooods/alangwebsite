import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import users from "./store_user";
Vue.use(Vuex);
export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: { users },
});
