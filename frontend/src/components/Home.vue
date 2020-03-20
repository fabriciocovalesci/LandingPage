<template>
  <div>
      <div class="home">
        <img src="@/assets/inicio.jpg" class="responsive"/>
            <div class="home-filho">
                <h1>Parque Aquático Alegria</h1>
                <p>Venha conhecer o incrível parque aquático da metrópoli<br><strong>Belas piscinas!</strong></br></p>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Baloo+2&display=swap');

body {
  margin: 0;
}

.home {
    display: flex;
    width: 50%;
    justify-content: space-between;
}

.home-filho{

    width: 100%;
    font-family: 'Baloo 2', cursive;
    text-align: center;
    flex: none;
    align-self: center;
  
}

.home-filho h1{
    font-size: 3em;
}

.home-filho p {
    font-size: 20px;
}

.responsive{
    display: flexbox;
    max-width: 100%;
    height: auto;
}
</style>