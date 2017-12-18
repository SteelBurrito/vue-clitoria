<template>
  <div class="container">
      <h1 class="has-text-centered has-text-weight-bold is-size-1">CRYPTO EXCHANGE RATE</h1>
      <div class="content">
          <select v-model="baseInput">
            <option disabled value="">Please select one</option>
          </select>
      </div>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
        
        }
    },

    computed: 
        mapGetters([
            'tickers'
        ]),
        baseInput: {
            get(){
                return this.$store.state.baseInput;
            },
            set(value){
                this.$store.commit('RECEIVE_TICKERS', value);
            }
        }
}
</script>
