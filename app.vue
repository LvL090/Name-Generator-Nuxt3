<script setup lang="ts">

enum Gender {
  GIRL = 'Girl',
  UNISEX = 'Unisex',
  BOY = 'Boy'
}
enum Popularity {
  TRENDY = 'Trendy',
  UNIQUE = 'Unique',
 
}
enum Length {
  SHORT = 'Short',
  ALL = 'All',
  LONG = 'Long'
}

interface OptionsState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}
const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  length: Length.SHORT,
  popularity: Popularity.TRENDY,

});


</script>




<template>
  <div class="container">
   <h1>Generador de Nombres</h1>
   <p>Escoge tus opciones y haz click en el botón "Buscar Nombres"</p>
   <div class="options-container">
     <div class="option-container">
       <h4>1) Escoge género</h4>
       <div class="option-buttons">
         <button class="option option-left" 
         :class="options.gender === Gender.GIRL && 'option-active'"
          @click="options.gender = Gender.GIRL"
          >
         Chica
         </button>
         <button class="option" 
         :class="options.gender === Gender.UNISEX && 'option-active'"
          @click="options.gender = Gender.UNISEX"
          >
         Unisex
         </button>
         <button class="option option-right"
          :class="options.gender === Gender.BOY && 'option-active'"
          @click="options.gender = Gender.BOY"
          >
         Chico
         </button>
       </div>
     </div>
     <div class="option-container">
       <h4>2) Escoge la popularidad del nombre</h4>
       <div class="option-buttons">
         <button class="option option-left"
          :class="options.popularity === Popularity.TRENDY && 'option-active'"
          @click="options.popularity = Popularity.TRENDY"
          >
         Actual
         </button>
         <button class="option option-right"
          :class="options.popularity === Popularity.UNIQUE && 'option-active'"
          @click="options.popularity = Popularity.UNIQUE"
          >
          Único
          </button>
       </div>
     </div>
     <div class="option-container">
       <h4>3) Escoge la longitud del nombre</h4>
       <div class="option-buttons">
         <button class="option option-left" 
         :class="options.length === Length.LONG && 'option-active'"
         @click="options.length = Length.LONG"
         >
         Largo
         </button>
         <button class="option" 
         :class="options.length === Length.ALL && 'option-active'"
         @click="options.length = Length.ALL"
         >
         Indiferente
         </button>
         <button class="option option-right" 
         :class="options.length === Length.SHORT && 'option-active'"
         @click="options.length = Length.SHORT"
         >
         Corto
         </button>
       </div>
     </div>
   </div>
 </div>
</template>



<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 3rem;
}
.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.option{
  background: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  color: rgb(27,60,138);
  cursor: pointer;
  font-weight: 200rem;
}

.option-left{
  border-radius: 1rem 0 0 1rem;
}
.option-right{
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>