<template>
  <main>
    <h1>Cadastro de Roupas</h1>
    <ul>
      <li>
        <input type="text" placeholder="Tipo da Roupa" v-model="tipo" />
      </li>
      <li>
        <input type="number" placeholder="Quantidade" v-model="quantidade" />
      </li>
      <li>
        <input type="text" placeholder="Valor" v-model="valor" />
      </li>
      <li>
        <input type="submit" value="Enviar" v-on:click="submitObject" />
      </li>
    </ul>
    <div v-if="mostrarobjeto">
    <div v-for="objeto in $store.state.roupas">
    <p>Tipo: {{ objeto.tipo }}</p>
    <p>Quantidade: {{ objeto.quantidade }}</p>
    <p>Valor: {{ objeto.valor }}</p>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return {
      tipo: "",
      quantidade: null,
      valor: null,
      objeto: {},
      roupas: [],
      mostrarobjeto: false
    };
  },
  methods: {
    submitObject(e) {
      e.preventDefault();
      this.mostrarobjeto = true
      this.objeto = {
        tipo: this.tipo,
        quantidade: this.quantidade,
        valor: this.valor,
      };
      this.roupas.push(this.objeto)
      this.$store.dispatch("saveRoupa", this.objeto);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  margin: 20px;
  background-color: vart(--color-background-nav);
}
ul {
  list-style-type: none;
  padding-left: 20px;
  font-size: larger;
}
</style>
