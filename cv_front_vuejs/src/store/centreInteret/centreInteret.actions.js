import axios from "axios";

export default {
  createCentreInteret(context, centreInteret) {
    const parmas = new FormData();
    parmas.append("intitule", centreInteret.intitule);
    axios.post("create/createCentreInteret.php", parmas).then(() => {
      context.commit("addCentre", centreInteret);
    });
  },
};
