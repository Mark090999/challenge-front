import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
  cities: ['Quito', 'Loja', 'Macara'],
  tickets: [
    {
      id: '1',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YyIYgyZ93qFERvxvRjKfpcwStttLNzcBuCadsRVLG52MyoBWtD2GV-_G-GKfTwLgQA&usqp=CAU',
      aereolinia: 'AeroMexico',
      duracion: '5 horas',
      escalas: '2',
      precio: '400'
    },
    {
      id: '2',
      img: 'https://creamas.org/wp-content/uploads/2019/07/Icono-LATAM.png',
      aereolinia: 'Latam Airlines',
      duracion: '4 horas',
      escalas: '1',
      precio: '500'
    },
    {
      id: '3',
      img: 'https://logos-marcas.com/wp-content/uploads/2020/11/American-Airlines-Logo.png',
      aereolinia: 'American Airlines',
      duracion: '3 horas',
      escalas: '1',
      precio: '1000'
    }
  ]
}
export default new Vuex.Store({
  state
})