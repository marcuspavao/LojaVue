<template>
  <header>
    <div class="container">
    <a href="/">{{ nome }}</a>
    <h1>Logout</h1>
    </div>
  </header>
</template>

<script>
/* import "../styles/global.css" */
export default {
  name: "HeaderHome",
  props: {
    nome: String
  }
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  width: 100%;
  height: 50px;
  color: var(--color-text-light);
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  color: var(--color-text-light);
  font-size: xx-large;
  text-decoration: none;
}
div{
  display: flex;
  justify-content:space-between;
}
</style>
