<template>
  <div>
    <ul class="row">
      <li 
      class="
      col 
      d-flex 
      justify-content-center
      text-uppercase
      " v-for="(fruit, index) in fruits" :key="index">
        {{ index + 1 }} : {{ fruit }}
      </li>
    </ul>
    <p>{{ prenom() }} {{ age.age }} {{ age.label }}</p>
    <!-- <p>{{reversing()}}</p> -->
    <button type="button" class="btn btn-link">bouton test bootstrap</button>
  </div>
</template>

<script>
export default {
  name: "Liste",
  data() {
    return {
      fruits: ["Liste ", "Papaye", "Fraise"],
    };
  },
  /*  ['prenom', 'age'], */
  props: {
    prenom: {
      type: Function,
      required: true
    },
    age : {
      type : String || Number
    }
  },
  //   une fois ici les props sont considérée comme etant dans nos data
  methods: {
    // reversing: function(){
    //     return this.prenom.split('').reverse().join('')
    // }
  },
};
</script>

<style scoped src="./Liste.css"></style>
