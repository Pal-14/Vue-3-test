<template>
  <div class="container mt-4">
   <h1>{{titre}} : modifié de l'enfant</h1>
    <liste :myArr="myArr" :mot="mot" v-on:changeTitre="changementTitre($event)">


      Si je veux ecrire ici il faut que je dise au parent de me mettre dans des balises slot
    </liste>
  

    
  </div>
</template>

<script>

import Liste from './Liste/Liste1.vue'
import axios from 'axios'



export default {
  name: "Contenu",

  data() {
    return {
      myArr: [
        {titre: 'Inception', date: 2010},
        {titre: 'Avatar', date: 2009},
        {titre: 'Seven', date: 1995},
        ],

        mot: 'Hello world0',
        titre: 'Le titre',
        article: null
     
    };
  
  },
    methods:{
      changementTitre: function(nvTitre){
        this.titre = nvTitre
      }
      

    },
  components: {
    'liste': Liste
    
  },
};
</script>


<style>
h1{
  margin-top: 100px !important;
}
</style>