<template>
  <div>
    <nav-bar></nav-bar>
    <home></home>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Home from './components/Home'

export default {
    components: {
        NavBar,
        Home
    }
 
}
</script>

<style>
body {
  margin: 0;
}
</style>
