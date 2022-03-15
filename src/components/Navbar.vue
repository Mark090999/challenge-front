<template>
  <b-navbar id="navbar" toggleable="md" variant="faded" type="light" class="mb-5">
    <b-container>
      <b-navbar-brand id="brand" to="/">Vuelos.com</b-navbar-brand>

      <b-navbar-toggle class="brand"  target="nav-collapse"></b-navbar-toggle>
      
    </b-container>
  </b-navbar>
</template>

<script>

export default {
  name: "Navbar",
  data() {
    return {

    };
  },  
  created() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped>
#navbar {
  background-color: #270570;
}
#brand, #router {
  color: white;
}
</style>
