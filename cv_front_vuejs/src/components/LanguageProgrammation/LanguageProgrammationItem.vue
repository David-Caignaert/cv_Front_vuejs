<template>
  <div>
    <div class="flex">
      <div class=" theAside__competence__div__for">
        <p class="theAside__competence_p">{{ item.logo }} {{ item.nom }}</p>
      </div>
      <div>
        <button @click="messageConfirmerEffecement()">
          <i class="fas fa-trash-alt ispe bgLightGrey"></i>
        </button>
        <button @click="avitiveModif()"><i class="fas fa-pen"></i></button>
      </div>
    </div>
    <div>
      <div v-if="afficherModification">
        <p>Modifier le language de programmation :</p>
        <input type="text" v-model="item.logo" />
        <input type="text" v-model="item.nom" />
        <button @click="validerModification()">
          <i class="fas fa-check"></i>
        </button>
        <button @click="deactiveModif()">
          <i class="fas fa-times"></i>
        </button>
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
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: { item: Object, idIndex: Number },
  data() {
    return {
      afficherModification: false,
      afficherConfirmerEffecement: false,
    };
  },
  methods: {
    messageConfirmerEffecement() {
      return (this.afficherConfirmerEffecement = true);
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
