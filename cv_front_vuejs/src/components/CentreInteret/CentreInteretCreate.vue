<template>
  <div>
    <form @submit="ValiderCréation()">
      <h1>Ajouter un Language de programmation</h1>
      <label>Intitulé du language de programmation</label>
      <br />
      <input v-model="formCentre.intitule" type="text" />
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
      formCentre: {
        intitule: "",
      },
      errors: [],
    };
  },
  methods: {
    ...mapActions(["createCentreInteret"]),
    ValiderCréation() {
      if (this.formValider()) {
        this.createCentreInteret({ ...this.formCentre });

        this.$router.push("/");
        location.reload();
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
