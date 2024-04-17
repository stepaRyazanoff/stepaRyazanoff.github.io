export default {
    state() {
        return {
            isToggle: false
        }
    },

    mutations: {
        TOGGLING_THEME(state) {
            state.isToggle = !state.isToggle
        }
    },

    actions: {
        TOGGLE_THEME({commit}) {
            commit('TOGGLING_THEME')
        }
    },

    getters: {
        TOGGLE_THEME_STATE(state) {
            return state.isToggle
        }
    },
}