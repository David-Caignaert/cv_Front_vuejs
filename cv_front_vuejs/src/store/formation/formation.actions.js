import axios from "axios";

export default {
  createFormation(context, formation) {
    const parmas = new FormData();
    parmas.append("ville", formation.ville);
    parmas.append("anneeObtention", formation.anneeObtention);
    parmas.append("intitule", formation.intitule);
    parmas.append("lieu", formation.lieu);
    axios.post("create/createFormation.php", parmas).then(() => {
      context.commit("addFormation", formation);
    });
  },
};
