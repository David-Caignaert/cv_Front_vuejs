import axios from "axios";

const getLanguageProgrammation = (context, idLand) => {
  axios
    .get("get/getLanguageProgrammation.php?id=" + idLand)
    .then((response) => {
      const data = response.data;
      console.log("basebase", response);
      context.commit(
        "GET_LANGUAGESPROGRAMMATIONS",
        Object.keys(data).map((key) => data[key])
      ),
        (error) => {
          console.log(error);
        };
    });
};

export default {
  deleteLanguageProgrammation(context, idLand, idIndex) {
    axios
      .post("delete/deleteLanguageProgrammation.php?id=" + idLand)
      .then(() => {
        context.commit("deleteLang", idIndex);
      });
  },
  createLanguageProgrammation(context, languageProgrammation) {
    const parmas = new FormData();
    parmas.append("nom", languageProgrammation.nom);
    parmas.append("logo", languageProgrammation.logo);
    axios.post("create/createLanguageProgrammation.php", parmas).then(() => {
      context.commit("addLang", languageProgrammation);
    });
  },

  getLanguageProgrammation,
};
