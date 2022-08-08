<template>
  <div>
    <ul class="">
      <li v-for="(film, index) in myArr" :key="index">
        <div class="card">
          <div class="card-body">
            Titre :{{ film.titre }}
            <br />
            Date {{ film.date }}
          </div>
        </div>
      </li>
    </ul>
    <p class="mt-3">{{ t }}</p>

    <button v-on:click="supprFilm" type="button" class="btn btn-danger mt-2 m-2">
      Supprime le film
    </button>
    <button v-on:click="Text" type="button" class="btn btn-danger mt-2 m-2">
      Supprime le Texte
    </button>
    <button v-on:click="changeTitre" type="button" class="btn btn-danger mt-2 m-2">
     Modifie le titre
    </button>
    <br><br>
    <slot></slot>

    
  </div>
</template>

<script>



export default {
  name: "Liste1",
  data() {
    return {
      fruits: ["Liste 1 ", "Papaye", "Fraise"],
      t: this.mot
    };
  },
   beforeCreate(){
    console.log('il va etre creer');
  },
  created(){
    console.log('le composant est creer');
  },
  beforeMount(){
    console.log('il va etre monter dans le dom');
  },
  mounted(){
    console.log('il est integrer dans le dom');
  },
  beforeUpdate(){
    console.log('il va se mettre a jour');
  },
  updated(){
    console.log('le composant s est mis a jour');
  },
  methods: {
    supprFilm:function(){
      this.myArr.pop()
    },
    
    Text: function(){
      this.t=""
    },
    changeTitre: function(){
      this.$emit('changeTitre', 'Mon nouveau titre')
      
    }
  },
  
  props: [ 'myArr', 'mot'],
};
</script>

<style scoped src="./Liste.css"></style>
