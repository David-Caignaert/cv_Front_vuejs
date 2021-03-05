export default {
  addExp(state, experiencePro) {
    state.experiencesPro.push(experiencePro);
  },
  deleteExp(state, idIndex) {
    state.languageProgrammations.removeItem(idIndex);
  },
};
