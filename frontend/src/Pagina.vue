<template>
  <div>
    <nav-bar></nav-bar>
    <home></home>
    <sobre-nos></sobre-nos>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SobreNos from "./components/SobreNos";

export default {
  components: {
    NavBar,
    Home,
    SobreNos
  }
};
</script>

<style>
body {
  margin: 0;
  width: 100%;
}
</style>
