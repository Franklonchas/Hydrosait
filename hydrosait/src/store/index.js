import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

import Rivers from './modules/Rivers';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Rivers,
    },
    plugins: [new VuexPersistence({
        storage: window.localStorage,
    }).plugin],
});
export default store;