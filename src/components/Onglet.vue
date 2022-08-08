<template>
  <div class="container mt-4">
    <div class="btn btn-outline-primary me-2" @click="toggleOng1">Onlet 1</div>
    <div class="btn btn-outline-primary ml-2" @click="toggleOng2">Onlet 2</div>

    <div class="card mb-5 border-primary mt-2 bg-info" v-if="toggle1">
      <texte1 class="p-4"></texte1>
    </div>

    <div class="card mb-5 " v-if="toggle2">
      <texte2 class="p-4"></texte2>
    </div>
  </div>
</template>

<script>
import Texte1 from "./Texte1.vue";
import Texte2 from "./Texte2.vue";

export default {
  name: "Onglet",
  data() {
    return {
      toggle1: true,
      toggle2: false,
    };
  },

  methods: {
    toggleOng1: function () {
      this.toggle1 = true
      this.toggle2 = false
    },
    toggleOng2: function () {
      this.toggle1 = false
      this.toggle2 = true
    },
  },

  components: {
    texte1: Texte1,
    texte2: Texte2,
  },
};
</script>
