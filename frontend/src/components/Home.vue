<template>
  <div class="home">
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=54"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=228"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://picsum.photos/250/250/?image=59"
            alt="Image 3"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <div class="principal ">
      <b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
        <template v-slot:header>Parque Aquático Alegria</template>

        <template v-slot:lead>
          Venha conhecer o incrível parque aquático.
        </template>

        <hr class="my-4" />

        <p class="belas">
          Belas piscinas!
        </p>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Baloo+2&display=swap");
@import "bootstrap-vue/dist/bootstrap-vue.css";
@import "bootstrap/dist/css/bootstrap.css";

.principal {
  width: 100%;
  height: calc(100vh - 350px);
  text-align: center;
  font-family: "Baloo 2";
  color: white !important;
}

.belas {
  font-size: 2em;
  color: #8a2be2;
}
</style>
