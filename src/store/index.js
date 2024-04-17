import {createStore} from 'vuex'
import theme from './modules/theme'
import date from './modules/date'
import time from './modules/time'
import users from './modules/users'
import charts from './modules/charts.js'
import sidebar from './modules/sidebar'

export const store = createStore({
    modules: {
        theme,
        date,
        time,
        users,
        charts,
        sidebar
    },
})


