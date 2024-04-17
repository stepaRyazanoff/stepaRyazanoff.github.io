export default {
    state() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Моисеев Михаил Сергеевич',
                    date: '13.08.1980',
                    number: 'Таб №: ГОКИ 0000',
                    description: 'Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда'
                }
            ]
        }
    },
    mutations: {},
    actions: {},
    getters: {
        USERS_STATE(state) {
            return state.users
        }
    },
}