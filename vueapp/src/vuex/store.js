import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cryptocurrencies from 'cryptocurrencies'

Vue.use(Vuex)

// the root, initial state object 
const state = {
    data: null,
    currency: null,
    crypto: cryptocurrencies.symbols()
}

// define the possible mutations that can be applied to our state
const mutations = {
    RECEIVE_TICKERS(state, { tickers }) {
        state.data = tickers
    },
    RECEIVE_CURRENCIES(state, { currencies }){
        state.currency = currencies
    }
}

//Actions are where we write functions that will commit changes to the store
//Instead of mutating the store’s state directly, actions commit mutations, which then updates the state
const actions = {
    async FETCH_TICKERS({ commit }, base, target){
        const url = 'https://api.cryptonator.com/api/full/{baseInput}-{target}'
        const { data } = await axios.get(url)
        commit('RECEIVE_TICKERS', { tickers: ticker })
    },
    async FETCH_CURRENCY({ commit }){
        const curr = require('./currency.json')
        const { currency } = axios.get(curr)
        commit('RECEIVE_CURRENCIES', {currencies: code})
    }
}

//Getters are helper functions that retrieve data from our state.
const getters = {
    tickers: state=>{
        return state.data.map(data=> {
            return{
                //API JSON Return
                error: data.error,
                base: data.base,
                target: data.target,
                price: data.price,
                volume: data.volume,
                change: data.change,
                markets: data.markets,
                timestamp: data.timestamp,

                //Currency and Cryptocurrency input used to get API result
                baseInput: crypto,
                target: currency
            }
        })
    }
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