export default {
    state() {
        return {
            briefing: true,
            preShiftBriefing: false,
            tests: 348,
            attestationDays: 29,
        }
    },

    mutations: {
        UPDATING_BRIEFING(state, payload) {
        },
        UPDATING_PRE_SHIFT_BRIEFING(state, payload) {
        },
        UPDATING_TESTS(state, payload) {
        },
        UPDATING_ATTESTATION(state, payload) {
        },
    },

    actions: {
        UPDATE_BRIEFING({commit}, payload) {
            commit('UPDATING_BRIEFING', payload)
        },
        UPDATE_PRE_SHIFT_BRIEFING({commit}, payload) {
            commit('UPDATING_PRE_SHIFT_BRIEFING', payload)
        },
        UPDATE_TESTS({commit}, payload) {
            commit('UPDATING_TESTS', payload)
        },
        UPDATE_ATTESTATION({commit}, payload) {
            commit('UPDATING_ATTESTATION', payload)
        }
    },

    getters: {
        BRIEFING_STATE(state) {
            return state.briefing
        },
        PRE_SHIFT_BRIEFING_STATE(state) {
            return state.preShiftBriefing
        },
        TESTS_STATE(state) {
            return state.tests
        },
        ATTESTATION_STATE(state) {
            return state.attestationDays
        },
    },
}