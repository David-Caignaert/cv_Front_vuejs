import Vue from "vue";
import Vuex from "vuex";
//import candidat from "./candidat/candidats.store";
//import languageProgrammation from "./languageProgrammation/languageProgrammation.store";
//import centreInteret from "./centreInteret/centreInteret.store";
import axios from "axios";

Vue.use(Vuex);

const candidat = {
  state: {
    datas: [],
  },
  mutations: {
    addMany(state, candidats) {
      state.datas = candidats;
    },
  },
  actions: {
    fetchDatas(context) {
      axios.get("getCandidat.php?id=1").then((response) => {
        const data = response.data;
        console.log("res", response);
        context.commit(
          "addMany",
          Object.keys(data).map((key) => data[key])
        );
      });
    },
  },
};
/* const languageProgrammation = {
  stat: {
    datas: [],
  },
};
const centreInteret = {
  stat: {
    datas: [],
  },
}; */
/* const formation = {
  stat: {
    datas: [],
  },
};
const experiencePro = {
  stat: {
    datas: [],
  },
}; */
const store = Vuex.Store({
  modules: {
    candidat,
    /* languageProgrammation,
    centreInteret, */
  },
});

export default store;
