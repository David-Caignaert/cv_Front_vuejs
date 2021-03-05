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
      <ul v-if="errors.length">
        <li class="text-danger" v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
      <button>Ajouter</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
    ...mapActions(["createExperiencePro"]),
    ValiderCréation() {
      if (this.formValider()) {
        this.createExperiencePro({ ...this.formExperiencePro });

        this.$router.push("/");
        location.reload();
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
