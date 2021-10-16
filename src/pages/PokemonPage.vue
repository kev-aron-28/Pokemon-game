<template>
  <h1 v-if="!pokemon">Cargando...</h1> 
  <div v-else>
    <h1>Quien es el pokemon?</h1>
  
    <pokemon-picture 
      :pokemonId="pokemon.id" 
      :showPokemon="showPokemon"/>
      
      <pokemon-options 
        :pokemons="pokemonArr"
        @selection="checkAnswer($event)"/>
      
      <div v-if="showAnser">
         <h2>{{message}}</h2>
        <button @click="newGame">Nuevo juevo</button>

      </div>
       
  </div>
  
   
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue'
import getPokemonOptions from '../helpers/getPokemonOptions.js'

export default {
  name: 'PokemonPage',
  components: {
    PokemonPicture,
    PokemonOptions
  },

  data(){
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnser: false,
      message: ''
    }
  },

  methods: {
   async mixPokemonArr(){
     this.pokemonArr = await getPokemonOptions()
     const rndInt = Math.floor( Math.random() * 4 )
     this.pokemon = this.pokemonArr[rndInt]
   },

    checkAnswer( pId ){
      this.showPokemon = true
      this.showAnser = true
      if( pId === this.pokemon.id ){
        this.message = `Correcto`
      } else {
        this.message = `Oops, era ${this.pokemon.name}`
      }
    },

    newGame(){
      this.showPokemon = false;
      this.showAnser = false;
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArr()
    }
  },
  
  mounted() {
    this.mixPokemonArr()
  }

}
</script> 

<style>

</style>
