<template>
  <div>
    <ul>
      <li v-for="foto in fotos" :key="foto.titulo">
        {{ foto.img }} - {{ foto.titulo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sobre-nos",
  data() {
    return {
      fotos: [
        {
          img: "require('@/assets/agua-limpa.jpg')",
          titulo: "Diversão garantida !",
          descricao: "Aqui você e sua família podem aproveitar ao máximo !!!"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import "reset-css";
@import url("https://fonts.googleapis.com/css?family=Lobster+Two&display=swap");
@import "bootstrap-vue/dist/bootstrap-vue.css";
@import "bootstrap/dist/css/bootstrap.css";

.sobre {
  width: 100%;
  height: auto;
}

.foto {
  margin-top: 320px;
  padding: 30px;
}
</style>
