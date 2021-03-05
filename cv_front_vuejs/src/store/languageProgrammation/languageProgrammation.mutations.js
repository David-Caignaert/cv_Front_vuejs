const GET_LANGUAGESPROGRAMMATIONS = (state, languageProgrammations) => {
  state.languageProgrammations = languageProgrammations;
};
export default {
  addLang(state, languageProgrammation) {
    state.languageProgrammations.push(languageProgrammation);
  },
  deleteLang(state, idIndex) {
    state.languageProgrammations.removeItem(idIndex);
  },
  GET_LANGUAGESPROGRAMMATIONS,
};
