<template>
  <main>
    <h1>Cadastro de Clientes</h1>
    <ul>
      <li>
        <input type="text" placeholder="Nome Completo" v-model="nome" />
      </li>
      <li>
        <input type="date" placeholder="Data de Nascimento" v-model="datadenascimento" />
      </li>
      <li>
        <input type="submit" value="Enviar" v-on:click="submitObject()" />
      </li>
    </ul>
    <div v-if="mostrarobjeto">
    <div v-for="objeto in roupas">
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
      
    // TODO MANDAR OS DADOS PARA O BANCO DE DADOS
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
