import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cryptocurrencies from 'cryptocurrencies'

Vue.use(Vuex)

// the root, initial state object 
const state = {
    num: 1,
    currInput: null,
    target: null,
    data: null,
    currency: "idr",
    cryptos: null
}

// define the possible mutations that can be applied to our state
const mutations = {
    RECEIVE_TICKERS(state, { tickers }) {
        state.data = tickers
    },
    RECEIVE_CRYPTOS(state, { cryptos }){
        state.cryptos = cryptos
    },
    RECEIVE_CURRENCIES(state, { currencies }){
        state.currency = currencies
    },
    UPDATE_CURR_INPUT(state, currInput){
        state.obj.currInput = currInput
    },
    getHello(state) {
        state.num++;
    }
}

//Actions are where we write functions that will commit changes to the store
//Instead of mutating the store’s state directly, actions commit mutations, which then updates the state
const actions = {
    async FETCH_TICKERS({ commit }, currInput, target){
        const url = 'https://api.cryptonator.com/api/full/' + currInput + '-' + target + '/'
        const { data } = await axios.get(url)
        commit('RECEIVE_TICKERS', { tickers: ticker })
    },
    async FETCH_CRYPTOS({ commit }){
        const url = 'https://www.cryptonator.com/api/currencies'
        const { cryptos } = await axios.get(url)
        commit('RECEIVE_CRYPTOS', { cryptos: code })
    },
    async FETCH_CURRENCIES({ commit }){
        const curr = require('./currency.json')
        const { currency } = axios.get(curr)
        commit('RECEIVE_CURRENCIES', {currencies: code})
    },
    
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
                timestamp: data.timestamp
            }
        })
    },
    cryptos: state=>{
        return state.cryptos.map(cryptos=> {
            return{
                currInput: cryptos
            }
        })
    },
    currencies: state => {
        return state.currencies.map(currencies => {
            return {
                target: currencies
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