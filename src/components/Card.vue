<template>
        <b-card id="card" no-body class="overflow-hidden" >
            <b-row no-gutters>
            <b-col md="2">
                <b-card-img style="max-width: 150px" :src="img" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="3">
                <h5>Aereolínea</h5>
                <p class="detail">{{aereolinia}}</p>
            </b-col>
            <b-col md="3">
                <h5>Precio</h5>
                <p class="detail">${{precio}}</p>
            </b-col>
            <b-col md="2">
                <h5>Escalas</h5>
                <p class="detail">{{escalas}}</p>
            </b-col>
            <b-col md="2">
                <h5>Duración</h5>
                <p class="detail">{{duracion}}</p>
            </b-col>
            </b-row>
        </b-card>
</template>

<script>
export default {
  name :"Tickets",
  props: {
    img: String,
    aereolinia: String,
    precio: String,
    escalas: String,
    duracion: String,
  },
  data() {
    return {
        
    };
  },
};
</script>

<style scoped>
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