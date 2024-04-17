export default {
    state() {
        return {
            date: Date.now(),
        }
    },

    mutations: {
        UPDATING_DATE(state, payload) {
            return state.date = payload
        }
    },

    actions: {
        UPDATE_DATE({commit}, payload) {
            commit('UPDATING_DATE', payload)
        }
    },

    getters: {
        DATA_STATE(state) {
            return new Date(state.date).toLocaleDateString('ru-RU')
        }
    },
}