<template>
  <div>
    <form @submit="ValiderCréation()">
      <h1>Ajouter une formation</h1>
      <label>Ville</label>
      <br />
      <input v-model="formFormation.ville" type="text" />
      <br /><br />
      <label>Année Obtention</label>
      <br />
      <input
        v-model="formFormation.anneeObtention"
        type="number"
        max="2021"
        min="1990"
      />
      <br /><br />
      <label>Intitulé de la formation</label>
      <br />
      <input v-model="formFormation.intitule" type="text" />
      <br /><br />
      <label>Lieu de la formation</label>
      <br />
      <input v-model="formFormation.lieu" type="text" />
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
      formFormation: {
        ville: "",
        anneeObtention: "",
        intitule: "",
        lieu: "",
      },
      errors: [],
    };
  },
  methods: {
    ValiderCréation() {
      if (this.formValider()) {
        const params = new FormData();
        params.append("ville", this.formFormation.ville);
        params.append("anneeObtention", this.formFormation.anneeObtention);
        params.append("intitule", this.formFormation.intitule);
        params.append("lieu", this.formFormation.lieu);
        axios
          .post("create/createFormation.php", params)
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
      if (!this.formFormation.ville) {
        this.errors.push("Remplir le champ ville");
      }
      if (!this.formFormation.anneeObtention) {
        this.errors.push("Remplir le champ année obtention");
      }
      if (!this.formFormation.intitule) {
        this.errors.push("Remplir le champ intitulé de la formation");
      }
      if (!this.formFormation.lieu) {
        this.errors.push("Remplir le champ lieu de la formation");
      }

      return this.errors.length ? false : true;
    },
  },
};
</script>

<style></style>
