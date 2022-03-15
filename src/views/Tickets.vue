<template>
  <b-container class="bv-example-row" align-v="top" align-h="center" fluid>
    <h2>Tickets</h2>
    <div class="resultados">
      <template v-for="ticket in tickets" :v-key="ticket.id">
        <Card :key="ticket.id" :aereolinia="ticket.aereolinia" :duracion="ticket.duracion" :escalas="ticket.escalas" :img="ticket.img" :precio="ticket.precio"></Card>
        <hr :key="ticket.id" class="solid">
      </template>
    </div>
  </b-container>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  components: { Card },
  data() {
    return {
      tickets: []
    };
  },
  async created(){
    this.tickets = this.$store.state.tickets;
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