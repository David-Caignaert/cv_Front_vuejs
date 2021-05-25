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
      <input
        type="number"
        min="1990"
        max="2021"
        v-model="item.anneeObtention"
      />
      <input type="text" v-model="item.intitule" />
      <input type="text" v-model="item.lieu" />
      <input type="text" v-model="item.ville" />
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
