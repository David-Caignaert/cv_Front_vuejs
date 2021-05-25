<template>
  <div>
    <form @submit="ValiderCréation()">
      <h1>Ajouter un Language de programmation</h1>
      <label>Intitulé du language de programmation</label>
      <br />
      <input v-model="formCentre.intitule" type="text" />
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
      formCentre: {
        intitule: "",
      },
      errors: [],
    };
  },
  methods: {
    ValiderCréation() {
      if (this.formValider()) {
        const params = new FormData();
        params.append("intitule", this.formCentre.intitule);
        axios
          .post("create/createCentreInteret.php", params)
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
      if (!this.formCentre.intitule) {
        this.errors.push("Remplir le champ intitule");
      }

      return this.errors.length ? false : true;
    },
  },
};
</script>

<style></style>
