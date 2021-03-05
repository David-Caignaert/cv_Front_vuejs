import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import LanguageProgrammationCreate from "./components/LanguageProgrammation/LanguageProgrammationCreate.vue";
import FormationCreate from "./components/Formation/FormationCreate.vue";
import ExperienceCreate from "./components/ExperiencePro/ExperienceProCreate.vue";
import CentreInteretCreate from "./components/CentreInteret/CentreInteretCreate.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "homePage",
      component: Home,
    },
    {
      path: "/LanguageProgrammationCreate",
      name: "languageProgrammationCreatePage",
      component: LanguageProgrammationCreate,
    },
    {
      path: "/FormationCreate",

      component: FormationCreate,
    },
    {
      path: "/ExperienceProCreate",
      component: ExperienceCreate,
    },
    {
      path: "/CentreInteretCreate",
      component: CentreInteretCreate,
    },
  ],
});
