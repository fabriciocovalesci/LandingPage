<template>
  <div class="hello">
   <nav>
     <ul class="menu">
       <li>Home</li>
       <li>Sobre Nós</li>
       <li>Localização</li>
       <li>Contato</li>
     </ul>
   </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
@import 'reset-css';
@import url('https://fonts.googleapis.com/css?family=Lobster+Two&display=swap');

body {
  margin: 0;
  line-height: 1;
}

nav {
  background-color: rgba(22, 20, 20, 0.5);
  opacity: 0.9;
  padding: 25px ;
  width: 100%;
  margin: 0 auto;
}
.menu{
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  width: 100%;
}

li {
  padding: 0 30px;  
  font-family: 'Lobster Two', cursive;
  font-size: 2em;
  color: aliceblue;
}

li:hover{
  color: #000000;
}

</style>
