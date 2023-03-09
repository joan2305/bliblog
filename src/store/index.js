import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'

Vue.use(Vuex)

export default new Vuex.Store({
    state : main.state,
    getters:main.getters,
    actions:main.actions,
    mutations:main.mutations
})