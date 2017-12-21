<template>
  <div class="container">
      <h1 class="has-text-centered has-text-weight-bold is-size-1" @click="tesStore()">CRYPTO EXCHANGE RATE</h1>
      <h3>{{ $store.state.num }}</h3>
      <div class="content">
          <select v-model="currInput">
            <option disabled value="">Please select one</option>
            <option v-if='currency.length === 0' disabled>No money no honey :(</option>
            
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
            currency: [],
            index: this.$store.state.arr,
        };
    },
        // currInput:{
        //     get () {
        //         return this.$store.state.baseInput.currInput;
        //     },
        //     set (value) {
        //         this.$store.commit('UPDATE_CURR_INPUT', currInput);
        //     }
        // },

    created(){
        var vm = this;
        vm.fetchCurrency();
    },
    
    methods: {
        tesStore() {
            this.$store.commit("getHello");
        },
        fetchCurrency(){
            this.currency = this.$store.dispatch("fetch_currencies");
            // console.log(this.currencies);
        },
        fetchCryptos(){
            this.cryptos = $store.getters.cryptos;
        }   
    }
}
</script>
