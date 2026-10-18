<template>
  <article>
    <h2>Nossas Unidades</h2>
    <p>Encontre a La Fatia mais perto de você!</p>

    <section class="unidades">
      <div class="card">
        <img src="../assets/imagens/unidades/lagoa_nova.jpeg" alt="">
        <h3>Lagoa Nova</h3>
        <p>Nossa unidade em Lagoa Nova.</p>
      </div>

      <div class="card">
        <img src="../assets/imagens/unidades/candelaria.jpeg" alt="">
        <h3>Candelária</h3>
        <p>Nossa unidade em Candelária.</p>
      </div>

      <div class="card">
        <img src="../assets/imagens/unidades/parnamirim.jpeg" alt="">
        <h3>Parnamirim</h3>
        <p>Nossa unidade em Parnamirim.</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'UnidadesView'
}
</script>

<style scoped>
article {
  padding: 30px;
  text-align: center;
}

.unidades {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.card {
  width: 30%;
}

.card img {
  width: 100%;
  height: 250px;
}

.card h3 {
  margin-top: 10px;
}

.card p {
  margin-top: 8px;
}
</style>