<template>
  <div>
    <nav-bar></nav-bar>
    <home></home>
    <sobre-nos></sobre-nos>
    <contato></contato>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SobreNos from "./components/SobreNos";
import Contato from "./components/Contato";

export default {
  components: {
    NavBar,
    Home,
    SobreNos,
    Contato
  }
};
</script>

<style>
body {
  margin: 0;
  width: 100%;
}
</style>
