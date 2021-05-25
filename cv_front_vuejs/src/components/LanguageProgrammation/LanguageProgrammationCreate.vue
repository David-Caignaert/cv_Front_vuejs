<template>
  <div>
    <form @submit="ValiderCréation()">
      <h1>Ajouter un Language de programmation</h1>
      <label>Nom</label>
      <br />
      <input v-model="formLang.nom" type="text" />
      <br /><br />
      <label>Logo</label>
      <br />
      <input v-model="formLang.logo" type="text" />
      <br /><br />
      <button>Ajouter</button>
    </form>
    <ul v-if="errors.length">
      <li class="text-danger" v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formLang: {
        nom: "",
        logo: "",
      },
      errors: [],
    };
  },
  methods: {
    ValiderCréation() {
      if (this.formValider()) {
        const params = new FormData();
        params.append("logo", this.formLang.logo);
        params.append("nom", this.formLang.nom);
        axios
          .post("create/createLanguageProgrammation.php", params)
          .then((response) => {
            console.log(response);
            this.$router.push("/");
            location.reload();
          })
          .catch(function(error) {
            console.log("ERREUR", error);
          });
      }
    },
    formValider() {
      this.errors = [];
      if (!this.formLang.nom) {
        this.errors.push("Remplir le champ Nom");
      }
      if (!this.formLang.logo) {
        this.errors.push("Remplir le champ logo");
      }

      return this.errors.length ? false : true;
    },
  },
};
</script>

<style></style>
