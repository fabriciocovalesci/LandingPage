<template>
  <div>
    <b-navbar toggleable type="dark" variant="dark">
      <div class="mb-2">
        <b-navbar-brand href="#"
          ><b-avatar
            src="http://ayoola.co/wp-content/uploads/2016/03/LOGOMARCA-LIQUED-redesocial.png"
          ></b-avatar
        ></b-navbar-brand>
      </div>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Sobre Nós</b-nav-item>
          <b-nav-item href="#">Localização</b-nav-item>
          <b-nav-item href="#">Contato</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style scoped>
@import "reset-css";
@import url("https://fonts.googleapis.com/css?family=Lobster+Two&display=swap");
@import "bootstrap-vue/dist/bootstrap-vue.css";
@import "bootstrap/dist/css/bootstrap.css";
</style>
