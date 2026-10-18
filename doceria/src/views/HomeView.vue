<template>
  <article>
    <section class="inicio">
      <div class="texto">
        <h2>Bem-vindo à La Fatia!</h2>
        <p>Um pedacinho de felicidade em cada fatia.</p>
        <p>Delícias preparadas para deixar seu dia mais doce.</p>
      </div>

      <img src="../assets/imagens/la_fatia.png" alt="">
    </section>
  </article>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
article {
  padding: 30px;
}

.inicio {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  min-height: 500px;
}
.texto{
  width: 40%;
  text-align: center;
}
.texto h2 {
  font-size: 32px;
}

.texto p {
  margin-top: 15px;
}
.inicio img {
  width: 40%;
  height: 450px;
  object-fit: cover;
}
</style>