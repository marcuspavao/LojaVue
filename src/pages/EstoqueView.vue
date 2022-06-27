<template>
  <main>
    <h1>Estoque</h1>
    {{ $store.state.roupas }} 
       
  </main>
</template>

<script>
export default {
  name: "EstoqueView",
  methods: {
    // Action
    // this.$store.dispatch('saveFirstName', this.myName);
    // Mutation
    //this.$store.commit('saveFirstName', this.myName)
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
