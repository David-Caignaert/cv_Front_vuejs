import actions from "./formation.actions.js";
import mutations from "./formation.mutations.js";
//import getters from "./formation.getters";

export default {
  state: {
    namespaced: true,
    formations: [],
  },
  actions,
  mutations,
  //getters,
};
