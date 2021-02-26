import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import LanguageProgrammationCreate from "./components/LanguageProgrammation/LanguageProgrammationCreate.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/LanguageProgrammationCreate",
      component: LanguageProgrammationCreate,
    },
  ],
});
