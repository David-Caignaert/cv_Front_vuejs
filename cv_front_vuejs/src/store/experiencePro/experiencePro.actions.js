import axios from "axios";

export default {
  createExperiencePro(context, experiencePro) {
    console.log("exp", experiencePro);
    const parmas = new FormData();
    parmas.append("dateDebut", experiencePro.dateDebut);
    parmas.append("dateFin", experiencePro.dateFin);
    parmas.append("intitule", experiencePro.intitule);
    parmas.append("lieu", experiencePro.lieu);
    parmas.append("ville", experiencePro.ville);
    axios.post("create/createExperiencePro.php", parmas).then(() => {
      context.commit("addExp", experiencePro);
    });
  },
  deleteExperiencePro(context, idLand, idIndex) {
    axios.post("delete/deleteExperiencePro.php?id=" + idLand).then(() => {
      context.commit("deleteExp", idIndex);
    });
  },
};
