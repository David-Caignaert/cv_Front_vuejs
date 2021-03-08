import Vue from "vue";
import Vuex from "vuex";
import candidat from "./candidat/candidats.store";
//import languageProgrammation from "./languageProgrammation/languageProgrammation.store";
import formation from "./formation/formation.store";
import experiencePro from "./experiencePro/experiencePro.store";
import centreInteret from "./centreInteret/centreInteret.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    candidat,
    //languageProgrammation,
    formation,
    experiencePro,
    centreInteret,
  },
});
