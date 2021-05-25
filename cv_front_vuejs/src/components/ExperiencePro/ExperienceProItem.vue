<template>
  <div>
    <div class="flex">
      <p class="main__experience__p1">
        {{ item.dateDebut }} - {{ item.dateFin }}
      </p>
      <p class="main__experience__p2">
        {{ item.intitule }},{{ item.ville }} {{ item.lieu }}
      </p>
      <button @click="messageConfirmerEffecement()">
        <i class="fas fa-trash-alt ispe"></i>
      </button>
      <button @click="avitiveModif()"><i class="fas fa-pen"></i></button>
    </div>
    <div v-if="afficherModification">
      <p>Modifier l'experience pro :</p>
      <input type="date" v-model="item.dateDebut" />
      <input type="date" v-model="item.dateFin" />
      <input type="text" v-model="item.intitule" />
      <input type="text" v-model="item.ville" />
      <input type="text" v-model="item.lieu" />

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
      axios.post("delete/deleteExperiencePro.php", parmas).then((response) => {
        console.log("delExp", response);
        location.reload();
      });
    },
    avitiveModif() {
      return (this.afficherModification = true);
    },
    validerModification() {
      const parmas = new FormData();
      parmas.append("id", this.item.id);
      parmas.append("dateDebut", this.item.dateDebut);
      parmas.append("dateFin", this.item.dateFin);
      parmas.append("intitule", this.item.intitule);
      parmas.append("ville", this.item.ville);
      parmas.append("lieu", this.item.lieu);
      console.log("params", parmas);
      axios.post("update/updateExperiencePro.php", parmas).then((response) => {
        console.log("modExp", response);
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
