<template>
  <b-container class="bv-example-row" align-v="center" fluid>
      <b-row class="buscador">
        <b-col></b-col>
        <b-col></b-col>
        <b-col></b-col>
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
      count: 0,
      selected: null,
        options: [
          { value: 'A', text: 'Option A (from options prop)' },
          { value: 'B', text: 'Option B (from options prop)' }
        ]
    };
  },
};
</script>

<style scoped>
</style>