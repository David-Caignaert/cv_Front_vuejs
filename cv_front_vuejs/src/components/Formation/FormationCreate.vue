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
      <input v-model="formFormation.anneeObtention" type="text" />
      <br /><br />
      <label>Intitulé de la formation</label>
      <br />
      <input v-model="formFormation.intitule" type="text" />
      <br /><br />
      <label>Lieu de la formation</label>
      <br />
      <input v-model="formFormation.lieu" type="text" />
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
    ...mapActions(["createFormation"]),
    ValiderCréation() {
      if (this.formValider()) {
        this.createFormation({ ...this.formFormation });

        this.$router.push("/");
        location.reload();
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
