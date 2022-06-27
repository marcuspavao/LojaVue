<template>
  <div id="app">
  <HeaderHome nome="Loja Teste 1"/>
  <router-view />
  </div>
</template>

<script>
import './styles/global.css'
import MainPage from './pages/PaginaPrincipal.vue'
import HeaderHome from './components/HeaderHome.vue' 

export default {
  name: 'App',
  components: {
    HeaderHome,
    MainPage
  }
}
</script>


