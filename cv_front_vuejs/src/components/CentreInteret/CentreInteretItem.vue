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
    <div v-if="afficherConfirmerEffecement">
      <p>Voulez-vous vraiment effacer?</p>
      <button @click="effacerItem()">
        <i class="fas fa-check"></i>
      </button>
      <button @click="deactiveModif()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { item: Object, idIndex: Number },
  data() {
    return {
      afficherConfirmerEffecement: false,
      afficherModification: false,
    };
  },
  methods: {
    messageConfirmerEffecement() {
      return (this.afficherConfirmerEffecement = true);
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
