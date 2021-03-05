import mutations from "./candidats.mutations";
import actions from "./candidats.actions";
import getters from "./candidats.getters";

export default {
  namespaced: true,
  state: {
    candidats: [],
  },
  mutations,
  actions,
  getters,
};
