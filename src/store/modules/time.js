export default {
    state() {
        return {
            time: Date.now(),
        }
    },

    mutations: {
        UPDATING_TIME(state, payload) {
            return state.time = payload
        }
    },

    actions: {
        UPDATE_TIME({commit}, payload) {
            commit('UPDATING_TIME', payload)
        }
    },

    getters: {
        TIME_STATE(state) {
            return new Date(state.time).toLocaleTimeString('ru-RU').slice(0, 5)
        }
    },
}