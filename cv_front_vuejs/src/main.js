import Vue from "vue";
import App from "./App.vue";
import * as Filters from "./utils/filters";
import axios from "axios";
import router from "./router.js";
import store from "./store/store.js";
import Sweet from "vue-sweetalert2";

Vue.config.productionTip = false;
//La base de l'url de mon API
axios.defaults.baseURL = "http://localhost/CV_back_end/";
/* //déclaration de l'interception de la requete
axios.interceptors.request.use((requete) => {
  console.log("requeteAxios", requete);
  return requete;
});
//déclaration de la reponde de la response
axios.interceptors.response.use((response) => {
  console.log("responseAxios", response);
  return response;
}); */
//Associer axios au prototype http
Vue.prototype.$http = axios;

Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f]);
});
Vue.use(Sweet);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
