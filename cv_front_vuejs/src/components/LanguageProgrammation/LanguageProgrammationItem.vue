<template>
  <div>
    <div>
      <p>
        {{ item.logo }} {{ item.nom }}
        <button @click="messageConfirmerEffecement()">
          <i class="fas fa-trash-alt ispe"></i>
        </button>
        <button @click="avitiveModif()"><i class="fas fa-pen"></i></button>
      </p>
    </div>

    <div v-if="afficherModification">
      <input type="text" v-model="item.logo" />
      <input type="text" v-model="item.nom" />
      <button @click="validerModification()">
        <i class="fas fa-check"></i>
      </button>
      <button @click="deactiveModif()"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { item: Object, idIndex: Number },
  data() {
    return {
      afficherModification: false,
    };
  },
  methods: {
    messageConfirmerEffecement() {
      this.$swal
        .fire({
          text: "Voulez-vous effacer ce languague programmation?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "oui,supprimer!",
          position: "center",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.effacerItem();
            this.$Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
    },
    effacerItem() {
      const parmas = new FormData();
      parmas.append("id", this.item.id);
      axios
        .post("delete/deletelanguageProgrammation.php", parmas)
        .then((response) => {
          console.log("delLang", response);
          location.reload();
        });
    },
    avitiveModif() {
      return (this.afficherModification = true);
    },
    validerModification() {
      const parmas = new FormData();
      parmas.append("id", this.item.id);
      parmas.append("logo", this.item.logo);
      parmas.append("nom", this.item.nom);
      console.log("params", parmas);
      axios
        .post("update/updatelanguageProgrammation.php", parmas)
        .then((response) => {
          console.log("modLang", response);
          location.reload();
        });
    },
    deactiveModif() {
      location.reload();
      return (this.afficherModification = false);
    },
  },
};
</script>

<style></style>
