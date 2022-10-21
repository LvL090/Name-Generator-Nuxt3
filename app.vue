
<template>
  <div class="container">
   <h1>Generador de Nombres</h1>
   <p>Escoge tus opciones y haz click en el botón "Buscar Nombres"</p>
   <div class="options-container">
     <div class="option-container">
       <h4>1) Escoge género</h4>
       <div class="option-buttons">
         <button class="option option-left">Chica</button>
         <button class="option">Unisex</button>
         <button class="option option-right">Chico</button>
       </div>
     </div>
     <div class="option-container">
       <h4>2) Escoge la popularidad del nombre</h4>
       <div class="option-buttons">
         <button class="option option-left">Actual</button>
         <button class="option option-right">Único</button>
       </div>
     </div>
     <div class="option-container">
       <h4>3) Escoge la longitud del nombre</h4>
       <div class="option-buttons">
         <button class="option option-left">Largo</button>
         <button class="option">Indiferente</button>
         <button class="option option-right">Corto</button>
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

.primary {
  background-color: rgb(249, 87, 89);
  color: white;
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}
.cards-container {
  display: flex;
  margin-top: 3rem;
  flex-wrap: wrap;
}
</style>