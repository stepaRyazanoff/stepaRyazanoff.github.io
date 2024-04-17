export default {
    state() {
        return {
            briefingColors: [],
            preShiftBriefingColors: [],
            testsColors: ['#B2D63C', '#353D54'],
            testsData: [],
            attestationColors: [],
            attestationData: [],
        }
    },
    // '#B2D63C', '#353D54', '#EF7F1A'
    mutations: {
        UPDATING_BRIEFING_COLOR(state, payload) {
            state.briefingColors.push(payload)
        },
        UPDATING_PRE_SHIFT_BRIEFING_COLOR(state, payload) {
            state.preShiftBriefingColors.push(payload)
        },
        UPDATING_TESTS_DATA(state, payload) {
            const totalCount = 500
            const n = totalCount - payload
            state.testsData = [payload, n]
        },
        UPDATING_ATTESTATION_COLOR(state, payload) {
        },
        UPDATING_ATTESTATION_DATA(state, payload) {
            const totalCount = 2000
            const n = totalCount - payload
            if (payload < 30) {
                state.attestationColors = ['#B2D63C', '#EF7F1A', '#353D54']
                state.attestationData = [0, payload, n]
            } else {
                state.attestationColors = ['#B2D63C', '#353D54', '#EF7F1A']
                state.attestationData = [payload, n, 0]
            }
        },
    },

    actions: {
        UPDATE_BRIEFING_COLOR({commit}, payload) {
            commit('UPDATING_BRIEFING_COLOR', payload)
        },
        UPDATE_PRE_SHIFT_BRIEFING_COLOR({commit}, payload) {
            commit('UPDATING_PRE_SHIFT_BRIEFING_COLOR', payload)
        },
        UPDATE_TESTS_DATA({commit}, payload) {
            commit('UPDATING_TESTS_DATA', payload)
        },
        UPDATE_ATTESTATION_DATA({commit}, payload) {
            commit('UPDATING_ATTESTATION_DATA', payload)
        },
        UPDATE_ATTESTATION_COLOR({commit}, payload) {
            commit('UPDATING_ATTESTATION_COLOR', payload)
        }
    },

    getters: {
        BRIEFING_COLOR_STATE(state) {
            return state.briefingColors
        },
        PRE_SHIFT_BRIEFING_COLOR_STATE(state) {
            return state.preShiftBriefingColors
        },
        TESTS_COLOR_STATE(state) {
            return state.testsColors
        },
        TESTS_DATA_STATE(state) {
            return state.testsData
        },
        ATTESTATION_COLOR_STATE(state) {
            return state.attestationColors
        },
        ATTESTATION_DATA_STATE(state) {
            return state.attestationData
        },
    },
}