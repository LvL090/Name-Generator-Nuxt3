<script setup lang="ts">
import {Gender,Popularity,Length, names} from "@/data"


interface OptionsState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}
const options = reactive<OptionsState>({
  gender: Gender.GIRL,
  length: Length.ALL,
  popularity: Popularity.TRENDY,

});

const computeSelectedNames = () => {
 const filteredNames = names
 .filter((name) => name.gender === options.gender)
 .filter((name) => name.popularity === options.popularity)
 .filter ((name) => {
  if(options.length === Length.ALL) return true
  else return name.length === options.length
 }) 

  selectedNames.value = filteredNames.map(name => name.name)

};

const selectedNames = ref<string[]>([]);

  const optionsArray = [
    {
      title: "1) Escoge género",
      category: "gender",
      buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY],
    },
    {
      title: "2) Escoge la popularidad del nombre",
      category: "popularity",
      buttons: [Popularity.TRENDY, Popularity.UNIQUE],
    },
    {
      title: "3) Escoge la longitud del nombre",
      category: "length",
      buttons: [Length.SHORT, Length.ALL, Length.LONG],
    },
  ];

</script>




<template>
  <div class="container">
    <h1>Generador de Nombres</h1>
    <p>Escoge tus opciones y haz click en el botón "Buscar Nombres"</p>
    <div class="options-container">
        <Option v-for="option in optionsArray" 
        :key="option.title" 
        :option="option"
        :options="options" 
        />
      <button class="primary" @click="computeSelectedNames">Encontrar Nombre</button>
    </div>
    <div class="cards-container">
      <div v-for="name in selectedNames" :key="name" class="card">
          <h4>{{ name }}</h4>
          <p>x</p>
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

.primary {
  background-color: rgb(87, 98, 249);
  color: white;
  border-radius: 6.5rem;
  border:none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

.cards-container{
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.card{
  background-color: rgb(27,60,138);
  width: 28%;
  color: white;
  border-radius: 1rem;
  padding: 0.1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  position: relative;
}

.card p {
  position: absolute;
  top: -20%;
  left: 92.5%;
  cursor: pointer;
  color: rgba(255, 255, 255, 0,178);

}
</style>