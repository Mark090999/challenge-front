<template>
  <div id="container">
  <nav-bar></nav-bar>  
  <router-view></router-view>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar, Footer },
  name: 'App',
}

</script>