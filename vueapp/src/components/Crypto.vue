<template>
  <div class="container">
      <h1 class="has-text-centered has-text-weight-bold is-size-1" @click="tesStore()">CRYPTO EXCHANGE RATE</h1>
      <h3>{{ $store.state.num }}</h3>
      <div class="content">
          <select v-model="currInput">
            <option disabled value="">Please select one</option>
            <option v-for="currency in currencies" :key="currency"></option>
          </select>
      </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            currInput: '',
            currencies: [],
            cryptos: []
        };
    },

    computed: 
        mapGetters([
            'tickers'
        ]),

        currInput:{
            get () {
                return this.$store.state.baseInput.currInput;
            },
            set (value) {
                this.$store.commit('UPDATE_CURR_INPUT', currInput);
            }
        },
    
    methods: {
        tesStore() {
            this.$store.commit("getHello");
        },
        fetchCurrency(){
            this.currencies = $store.getters.currencies;
        },
        fetchCryptos(){
            this.cryptos = $store.getters.cryptos;
        }   
    }
}
</script>
