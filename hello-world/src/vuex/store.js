import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    count: 1,
    list: []
}

var mutations = {
    incCount() {
        ++state.count;
    },
    addList(state,data) {
        state.list = data;
    }
}

var getters = {
    computedCount: (state) => {
        return state.count * 2;
    }
}

var actions = {
    incMutationsCount(context) {
        context.commit('incCount');
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations: mutations
})

export default store

