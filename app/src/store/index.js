import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        app,
        menu
    }
})

export default store