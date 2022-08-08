<template>
  <onglet></onglet>
  <liste></liste>
  <header-top></header-top>
</template>

<script>
import Contenu from "./components/Contenu1.vue";
import Header from './components/Header.vue';
import Onglet from './components/Onglet.vue';

export default {
  name: "App",
  components: {
    'contenu': Contenu,
    'header-top' : Header,
    'onglet': Onglet
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
