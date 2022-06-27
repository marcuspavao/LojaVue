<template>
  <main>
    <h1>Menu Principal mensagem:{{ msg }}</h1>
    <ul>
      <li><a href="/cadastrocliente">Cadastro de Clientes</a></li>
      <li><a href="/cadastroroupa">Cadastro de Roupas</a></li>
      <li><a href="/estoque">Estoque</a></li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main{
  margin: 20px;
  background-color: vart(--color-background-nav);
}
ul {
  list-style-type:circle;
  padding-left: 20px;
}

</style>
