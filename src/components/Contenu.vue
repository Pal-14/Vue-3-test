<template>
  <div class="container mt-4">
    <p>
      {{ txt }}
    </p>
    <liste :prenom="lePrenom" :age="age"></liste>
  </div>
</template>

<script>

import Liste from './Liste/Liste.vue'



export default {
  name: "Contenu",

  data() {
    return {
      txt: "le texte ici",
      lePrenom: function(){
        console.log('hello du parent')
        return 'pierre-alain';
      },
      age : {age: 35, label: 'ans'},
     
    };
  },
  components: {
    'liste': Liste
    
  },
};
</script>
