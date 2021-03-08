<template>
  <div>
    <div class="flex">
      <p class="main__centre__interet__p1">{{ item.intitule }}</p>
      <div class="main__centre__interet__i">
        <button @click="messageConfirmerEffecement()">
          <i class="fas fa-trash-alt ispe"></i>
        </button>
        <button @click="avitiveModif()"><i class="fas fa-pen"></i></button>
      </div>
    </div>
    <div v-if="afficherModification">
      <input type="text" v-model="item.intitule" />
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
      axios.post("delete/deleteCentreInteret.php", parmas).then((response) => {
        console.log("delCentre", response);
        location.reload();
      });
    },
    avitiveModif() {
      return (this.afficherModification = true);
    },
    validerModification() {
      const parmas = new FormData();
      parmas.append("id", this.item.id);
      parmas.append("intitule", this.item.intitule);
      console.log("params", parmas);
      axios.post("update/updateCentreInteret.php", parmas).then((response) => {
        console.log("modCentre", response);
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
