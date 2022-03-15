<template>
  <b-container class="bv-example-row" align-v="top" align-h="center" fluid>
    <h2>Tickets</h2>
    <div class="resultados">
        <Card :aerelonia="'Aeromexio'" :duracion="'10 minutos'" :escalas="'2'" :img="'https://picsum.photos/400/400/?image=20'" :precio="'10'"></Card>
    </div>
  </b-container>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  components: { Card },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.bv-example-row{
  background-color: #fdf7f7fa;
}
#card{  
  width: 80%; 
  margin: auto;
}
#card:hover {
  background-color: rgb(248, 243, 243);
}
.detail{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>