<template>
  <div class="container">
      <h1 class="has-text-centered has-text-weight-bold is-size-1" @click="tesStore()">CRYPTO EXCHANGE RATE</h1>
      <div class="content">
          <select v-model="currInput">
            <option v-if='currency.length === 0' disabled>No money no honey :(</option>
            <option v-for="curr in currency" :key="curr">Code: {{ curr.code }} - Name: {{ curr.name }}</option>
          </select>
      </div>    
  </div>
</template>

<script>
export default {
    data() {
        return {
            currInput: '',
            currency: []
        };
    },

    created(){
        var vm = this;
        vm.fetchCurrency();
    },
    

    methods: {
        tesStore() {
            this.$store.commit("getHello");
        },
        fetchCurrency(){
            this.$store.dispatch("fetch_currencies");
            this.currency = this.$store.state.currency;
        },
        fetchCryptos(){
            this.cryptos = $store.getters.cryptos;
        }   
    }
}
</script>
