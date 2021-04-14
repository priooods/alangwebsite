import User from "../api/user";
import cookie from "vue-cookies";
const defaultState = () => {
  return {
    user: [],
    userall: [],
    departemen: [],
  };
};

const state = defaultState();

const actions = {
  resetState({ commit }) {
    commit("resetState");
  },
  AllUser({ commit }) {
    User.SemuaUser().then((data) => {
      if (data.data.error_code == 0) {
        return commit("semuauser", data.data.data);
      }
    });
  },
  AddUser({ commit }, form) {
    User.TambahUser(form).then((data) => {
      if (data.data.error_code == 0) {
        cookie.set("id", data.data.data.id, "24d");
        cookie.set("next", 1, "24d");
        return commit("userbaru");
      } else {
        return cookie.set("next", 0, "24d");
      }
    });
  },
  AddUserDetail({ commit }, form) {
    User.DetailUser(form).then((data) => {
      if (data.data.error_code == 0) {
        cookie.set("next", 2, "24d");
        return commit("userbaru");
      } else {
        return cookie.set("next", 1, "24d");
      }
    });
  },
  FindUser({ commit }, name) {
    User.FindUser(name).then((data) => {
      if (data.data.error_code == 0) {
        return commit("detailuser", data.data.data);
      }
    });
  },
  AllDepartemen({ commit }) {
    User.AllDepartemen().then((data) => {
      return commit("departemen", data.data.data);
    });
  },
};

const mutations = {
  resetState(state) {
    Object.assign(state, defaultState());
  },
  userbaru(state) {
    return state;
  },
  detailuser(state, payload) {
    state.user = payload;
  },
  semuauser(state, payload) {
    state.userall = payload;
  },
  departemen(state, payload) {
    state.departemen = payload;
  },
};

export default {
  namespaced: true,
  getters: {},
  state,
  actions,
  mutations,
};
