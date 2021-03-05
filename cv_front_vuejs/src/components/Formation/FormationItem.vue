<template>
  <div>
    <div class="flex">
      <p class="main__formation__p1">
        {{ item.anneeObtention }}
      </p>
      <p class="main__formation__p2">
        {{ item.intitule }} {{ item.lieu }} {{ item.ville }}
      </p>
      <button @click="messageConfirmerEffecement()">
        <i class="fas fa-trash-alt ispe"></i>
      </button>
      <button @click="avitiveModif()"><i class="fas fa-pen"></i></button>
    </div>
    <div v-if="afficherModification">
      <input type="text" v-model="item.anneeObtention" />
      <input type="text" v-model="item.intitule" />
      <input type="text" v-model="item.lieu" />
      <input type="text" v-model="item.ville" />
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
      axios.post("delete/deleteFormation.php", parmas).then((response) => {
        console.log("delForm", response);
        location.reload();
      });
    },
    avitiveModif() {
      return (this.afficherModification = true);
    },
    validerModification() {
      const parmas = new FormData();
      parmas.append("id", this.item.id);
      parmas.append("ville", this.item.ville);
      parmas.append("anneeObtention", this.item.anneeObtention);
      parmas.append("intitule", this.item.intitule);
      parmas.append("lieu", this.item.lieu);
      console.log("params", parmas);
      axios.post("update/updateFormation.php", parmas).then((response) => {
        console.log("modForm", response);
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
