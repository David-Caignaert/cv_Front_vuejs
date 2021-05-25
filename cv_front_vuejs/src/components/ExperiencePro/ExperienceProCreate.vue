<template>
  <div>
    <form @submit="ValiderCréation()">
      <h1>Ajouter une expérience proffesionnel</h1>
      <label>Date début </label>
      <br />
      <input v-model="formExperiencePro.dateDebut" type="date" />
      <br /><br />
      <label>Date fin</label>
      <br />
      <input v-model="formExperiencePro.dateFin" type="date" />
      <br /><br />
      <label>Intitulé de l'experience proffesionnel</label>
      <br />
      <input v-model="formExperiencePro.intitule" type="text" />
      <br /><br />
      <label>Lieu</label>
      <br />
      <input v-model="formExperiencePro.lieu" type="text" />
      <br /><br />
      <label>Ville</label>
      <br />
      <input v-model="formExperiencePro.ville" type="text" />
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
      formExperiencePro: {
        dateDebut: "",
        dateFin: "",
        intitule: "",
        lieu: "",
        ville: "",
      },
      errors: [],
    };
  },
  methods: {
    ValiderCréation() {
      if (this.formValider()) {
        const params = new FormData();
        params.append("dateDebut", this.formExperiencePro.dateDebut);
        params.append("dateFin", this.formExperiencePro.dateFin);
        params.append("intitule", this.formExperiencePro.intitule);
        params.append("ville", this.formExperiencePro.ville);
        params.append("lieu", this.formExperiencePro.lieu);
        axios
          .post("create/createExperiencePro.php", params)
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
      if (!this.formExperiencePro.dateDebut) {
        this.errors.push("Remplir le champ ville");
      }
      if (!this.formExperiencePro.dateFin) {
        this.errors.push("Remplir le champ année obtention");
      }
      if (!this.formExperiencePro.intitule) {
        this.errors.push("Remplir le champ intitulé de la formation");
      }
      if (!this.formExperiencePro.lieu) {
        this.errors.push("Remplir le champ lieu de la formation");
      }
      if (!this.formExperiencePro.ville) {
        this.errors.push("Remplir le champ lieu de la formation");
      }

      return this.errors.length ? false : true;
    },
  },
};
</script>

<style></style>
