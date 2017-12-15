import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// the root, initial state object 
const state = {
    data: null,
}

// define the possible mutations that can be applied to our state
const mutations = {
    RECEIVE_TICKERS(state, { tickers }) {
        state.data = tickers
    }
}

//Actions are where we write functions that will commit changes to the store
//Instead of mutating the store’s state directly, actions commit mutations, which then updates the state
const actions = {
    async FETCH_TICKERS({ commit }, base, target){
        const url = 'https://api.cryptonator.com/api/full/{base}-{target}'
        const { data } = await axios.get(url)
        commit('RECEIVE_TICKERS', { tickers: ticker })
    }
}

//Getters are helper functions that retrieve data from our state.
const getters = {
    // characters: state => {
    //     return state.data.map(data => {
    //         return {
    //             name: data.name,
    //             url: data.urls[1] ? data.urls[1].url : data.urls[0].url,
    //             image: `${data.thumbnail.path}.${data.thumbnail.extension}`,
    //             description: data.description === '' ? 'No description listed for this character.' : data.description
    //         }
    //     })
    // }
    
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store