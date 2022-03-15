<template>
  <b-container class="bv-example-row" align-v="center" fluid>
      <b-row class="buscador">
        <div>
          <b-card id="principal" title="Vuelos" sub-title="">
            <b-card-body>
              <b-container class="bv-example-row">
                <b-row>
                  <b-col>                    
                    <label for="ori" style="font-size: 14px;">Ciudad de origen y destino</label>
                    <b-input-group size="md">
                      <b-form-input list="my-cities" id="ori" placeholder="Origen"></b-form-input>
                      <b-form-input list="my-cities" placeholder="Destino"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col>
                    <label for="ori" style="font-size: 14px;">Fecha de Salida y retorno</label>
                    <b-input-group size="md">
                      <b-form-input placeholder="Salida" type="date"></b-form-input>
                      <b-form-input placeholder="Retorno" type="date"></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col>   
                    <label for="ori" style="font-size: 14px;"></label>
                    <b-input-group size="md">                 
                    <b-button variant="primary" size="md" class="mb-2">
                      <b-icon icon="search" aria-hidden="true"></b-icon> Buscar
                    </b-button>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-container>      
              <datalist id="my-cities">
                <option v-for="city in cities" :key="city">{{ city }}</option>
              </datalist>        
            </b-card-body>
          </b-card>
        </div>
      </b-row>
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