import mutations from "./languageProgrammation.mutations.js";
import actions from "./languageProgrammation.actions.js";
//import getters from "./languageProgrammation.getters";

export default {
  namespaced: true,
  state: {
    languageProgrammations: [],
  },
  mutations,
  actions,
  //getters,
};
