<template>
  <article>
    <h2>Nosso Cardápio</h2>
    <p>Conheça nossas delícias!</p>

    <section class="cardapio">
      <div class="card">
        <img src="../assets/imagens/matilda.jpeg" alt="">
        <h3>Matilda</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/amendoim.jpeg" alt="">
        <h3>Amendoim</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/caramelo_salg.jpeg" alt="">
        <h3>Caramelo Salgado</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/cenoura.jpeg" alt="">
        <h3>Cenoura</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/maracuja.jpeg" alt="">
        <h3>Maracujá</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/ninho_morango.jpeg" alt="">
        <h3>Ninho com Morango</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/nutella.jpeg" alt="">
        <h3>Nutella</h3>
      </div>

      <div class="card">
        <img src="../assets/imagens/red_ninho.jpeg" alt="">
        <h3>Red Ninho</h3>
      </div>
    </section>

  </article>
</template>

<script>
export default {
  name: 'CardapioView'
}
</script>

<style scoped>
article {
  padding: 20px;
  text-align: center;

  .cardapio {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
}

.card {
  width: 23%;
}

.card img {
  width: 100%;
  height: 250px;
}

.card h3 {
  margin-top: 10px;
}
}
</style>
