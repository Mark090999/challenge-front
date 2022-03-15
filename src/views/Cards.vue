<template>
  <b-container class="bv-example-row" align-v="top" fluid>
      <p>ready</p>
  </b-container>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      cities: ['Quito', 'Loja', 'Macara']
    };
  },
};
</script>

<style scoped>
.buscador{
  background-color: #f8f3f3fa;
}
#principal{
  width: 80%; 
  margin: auto;
  background-color: #270570;
  color: white;
}
</style>