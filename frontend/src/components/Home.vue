<template>
  <div class="home">
    <b-container fluid class="p-4 bg-dark bv-example-row p-4">
      <b-row>
        <b-col sm="4">
          <b-img
            thumbnail
            fluid
            src="https://cdn.desapega.net/thumbs/620x400/cd/c42b50246760e62bf0813bf8282ed9f17341157a6b0fa53bc9cf4878272c5a.jpg"
            alt="Image 1"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://cdn.desapega.net/thumbs/620x400/14/5c9367046b28a6f36b957c78f91dc0fda1d231d939c6ed70e1daff3014dfc9.jpg"
            alt="Image 2"
          ></b-img>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://img.lacadordeofertas.com.br/site/OTI3OV8vdG1wL3BocHRPaXhicV8xNTExMTg2NDI2.jpg"
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
