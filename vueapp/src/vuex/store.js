import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// the root, initial state object 
const state = {
    num: 1,
    arr: 0,
    currency: [],
}

// define the possible mutations that can be applied to our state
const mutations = {
    RECEIVE_CURRENCIES(state, currencies ){
        state.currency = currencies 
        console.log(state.currency)
    },
    ITERATE_ARRAY(state){
        state.arr++
    }
}

//Actions are where we write functions that will commit changes to the store
//Instead of mutating the store’s state directly, actions commit mutations, which then updates the state
const actions = {
    async fetch_currencies({ commit }){
        var currencies = []
        const url = 'https://www.cryptonator.com/api/currencies'
        await axios.get(url).then((res)=>{
            commit('RECEIVE_CURRENCIES', currencies = res.data.rows )
        })
    }
    
}

//Getters are helper functions that retrieve data from our state.
const getters = {
    getCurrencyName: state => state.currency.name
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store

//getters tries
    // tickers: state=>{
    //     return state.data.map(data=> {
    //         return{
    //             //API JSON Return
    //             error: data.error,
    //             base: data.base,
    //             target: data.target,
    //             price: data.price,
    //             volume: data.volume,
    //             change: data.change,
    //             markets: data.markets,
    //             timestamp: data.timestamp
    //         }
    //     })
    // },
    // cryptos: state=>{
    //     return state.cryptos.map(cryptos=> {
    //         return{
    //             currInput: cryptos
    //         }
    //     })
    // },
    // currencies: state => {
    //     return state.currency.map(currency => {
    //         return {
    //             target: currency
    //         }
    //     })
    // }
    // getEachCurrencies: state => {
    //     // return state.currency.map(currency => {
    //     //     return {
    //     //         code: currency.rows[state.arr].code,
    //     //         name: currency.rows[state.arr].name
    //     //     }
    //     // })
    // }